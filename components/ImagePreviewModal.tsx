"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "./icons";

export type PreviewImage = {
  src: string;
  title: string;
  category?: string;
};

type ImagePreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: PreviewImage[];
  initialIndex: number;
};

export default function ImagePreviewModal({
  isOpen,
  onClose,
  images,
  initialIndex,
}: ImagePreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Sync state with initialIndex when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
      setDragOffset({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setIsZoomed(false);
    setDragOffset({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setIsZoomed(false);
    setDragOffset({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation & escape close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
    setDragOffset({ x: 0, y: 0 });
  };

  // Dragging support when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;
    setDragOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      {/* Backdrop click to close (only if not clicking controls or image) */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Header bar */}
      <header className="relative z-10 flex w-full items-center justify-between px-6 py-4 text-white">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8102e]">
            {currentImage.category ? currentImage.category.replace("-", " ") : "Embroidery Design"}
          </span>
          <h3 className="font-display text-sm font-bold sm:text-base">
            {currentImage.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom Toggle button */}
          <button
            onClick={toggleZoom}
            className="flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
            title="Toggle Zoom"
          >
            {isZoomed ? "Zoom Out" : "Zoom In"}
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:scale-105 hover:bg-white/10 hover:text-white"
            aria-label="Close Preview"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Image Container */}
      <div
        ref={imageContainerRef}
        className="relative flex flex-1 items-center justify-center p-4 md:p-8"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Navigation - Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/60 hover:text-white focus:outline-none sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* The Image Wrapper */}
        <div
          className={`relative h-full w-full max-w-4xl max-h-[70vh] transition-all duration-300 ease-out select-none ${
            isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-default"
          }`}
          style={{
            transform: isZoomed
              ? `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(1.6)`
              : "translate(0px, 0px) scale(1)",
          }}
          onClick={(e) => {
            // Prevent close on clicking the image itself
            e.stopPropagation();
          }}
          onDoubleClick={toggleZoom}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-contain pointer-events-none"
            priority
          />
        </div>

        {/* Navigation - Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/60 hover:text-white focus:outline-none sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Footer / Info section */}
      <footer className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-4 text-white/60">
        {images.length > 1 && (
          <span className="text-xs font-semibold tracking-wider">
            {currentIndex + 1} of {images.length}
          </span>
        )}
        <span className="mt-1 text-[10px] hidden sm:inline-block">
          Tip: Double click image to zoom. Use Left & Right arrows to navigate.
        </span>
      </footer>
    </div>
  );
}
