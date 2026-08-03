const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log("Sharp loaded successfully!");

const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// --- 1. UNUSED FILES TO DELETE ---
const unusedFiles = [
  'icons/baseball-cap-embroidery.png',
  'icons/settings-gear.png',
  'images/HeroAbout.png',
  'images/heroEndBg1.jpeg',
  'images/heroimage.png',
  'images/HeroMain.png',
  'images/homeHero.png',
  'images/MainHero.png',
  'images/portfolioHero.png',
  'images/storeHero.png',
  'images/storeHeroRating.png',
  'images/vesperVerticalLogo.jpeg',
  'vercel.svg'
];

console.log("=== DELETING UNUSED IMAGES ===");
for (const relPath of unusedFiles) {
  const absPath = path.join(publicDir, relPath);
  if (fs.existsSync(absPath)) {
    fs.unlinkSync(absPath);
    console.log(`Deleted unused file: ${relPath}`);
  } else {
    console.log(`Unused file not found (already deleted): ${relPath}`);
  }
}

// --- 2. ACTIVE PNG/JPG IMAGES TO CONVERT AND REPLACE ---
const imagesToConvert = [
  'icons/embroidered-cap-front.png',
  'icons/embroidered-jacket.png',
  'icons/embroidered-shield-patch.png',
  'icons/embroidered-shirt-check.png',
  'icons/embroidered-towel.png',
  'icons/embroidery-digitizing-box.png',
  'icons/embroidery-hoop.png',
  'icons/heart-needle-thread.png',
  'icons/smiley-face-patch.png',
  'icons/vector-pen-tool.png',
  'images/Logo.png',
  'images/aboutHero.png'
];

// Helper to recursively get files
function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      getFiles(itemPath, files);
    } else {
      files.push(itemPath);
    }
  }
  return files;
}

// Gather all source code files to search & replace references
const searchDirs = [
  path.join(projectRoot, 'app'),
  path.join(projectRoot, 'components'),
  path.join(projectRoot, 'lib'),
];
const codeFiles = [];
for (const dir of searchDirs) {
  if (fs.existsSync(dir)) {
    getFiles(dir, codeFiles);
  }
}
// Filter by relevant code extensions
const codeExtensions = ['.ts', '.tsx', '.json', '.css', '.js', '.jsx'];
const filteredCodeFiles = codeFiles.filter(file => {
  return codeExtensions.includes(path.extname(file).toLowerCase());
});

console.log(`\n=== CONVERTING USED IMAGES AND UPDATING CODE REFERENCES ===`);
console.log(`Found ${filteredCodeFiles.length} source code files to scan for image references.`);

async function runConversion() {
  for (const relPath of imagesToConvert) {
    const originalAbsPath = path.join(publicDir, relPath);
    
    if (!fs.existsSync(originalAbsPath)) {
      console.log(`Original file not found, skipping conversion: ${relPath}`);
      continue;
    }

    const ext = path.extname(relPath); // e.g. .png
    const webpRelPath = relPath.slice(0, -ext.length) + '.webp';
    const webpAbsPath = path.join(publicDir, webpRelPath);

    console.log(`\nOptimizing and converting: ${relPath} -> ${webpRelPath}`);
    
    try {
      // 2a. Convert to WebP using sharp with 80% quality
      await sharp(originalAbsPath)
        .webp({ quality: 80 })
        .toFile(webpAbsPath);
      
      console.log(`Successfully generated WebP: ${webpRelPath} (${(fs.statSync(webpAbsPath).size/1024).toFixed(1)} KB)`);

      // 2b. Update references in code
      const originalFileName = path.basename(relPath);
      const webpFileName = path.basename(webpRelPath);

      // Search formats:
      // 1. Full relative path: "/images/Logo.png" -> "/images/Logo.webp"
      // 2. Relative path without slash: "images/Logo.png" -> "images/Logo.webp"
      // 3. Filename only: "Logo.png" -> "Logo.webp"
      const searchStrings = [
        `/${relPath.replace(/\\/g, '/')}`,
        relPath.replace(/\\/g, '/'),
        originalFileName
      ];
      const replaceStrings = [
        `/${webpRelPath.replace(/\\/g, '/')}`,
        webpRelPath.replace(/\\/g, '/'),
        webpFileName
      ];

      let referencesUpdated = 0;
      for (const codeFilePath of filteredCodeFiles) {
        let content = fs.readFileSync(codeFilePath, 'utf8');
        let modified = false;

        for (let i = 0; i < searchStrings.length; i++) {
          if (content.includes(searchStrings[i])) {
            // Replace all occurrences
            content = content.split(searchStrings[i]).join(replaceStrings[i]);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(codeFilePath, content, 'utf8');
          referencesUpdated++;
          console.log(`  Updated references in: ${path.relative(projectRoot, codeFilePath)}`);
        }
      }
      
      console.log(`  References updated in ${referencesUpdated} files.`);

      // 2c. Delete the original PNG file now that conversion is complete
      fs.unlinkSync(originalAbsPath);
      console.log(`  Deleted original file: ${relPath}`);

    } catch (err) {
      console.error(`Error processing ${relPath}:`, err);
    }
  }

  console.log("\n=== COMPLETED OPTIMIZATION FLOW ===");
}

runConversion();
