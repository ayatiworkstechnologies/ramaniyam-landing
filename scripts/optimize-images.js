const { Jimp } = require("jimp");
const fs = require("fs");
const path = require("path");

const projectDir = path.join(process.cwd(), "public", "project");
const backupDir = path.join(process.cwd(), "public", "project_backup");

console.log(`Processing images in: ${projectDir}`);

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

fs.readdir(projectDir, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(projectDir, file);
      const backupPath = path.join(backupDir, file);

      // Backup
      try {
        if (!fs.existsSync(backupPath)) {
          fs.copyFileSync(filePath, backupPath);
        }
      } catch (e) {
        console.error(`Failed to backup ${file}:`, e);
        continue;
      }

      console.log(`Processing ${file}...`);

      try {
        const image = await Jimp.read(filePath);

        // Jimp v1: methods are async? or just return the instance?
        // If async, must await.
        // It seems resize returns 'this' but in v1 might be different or return new instance.
        // Let's assume standard async pattern for v1.

        await image.resize({ w: 1200 });
        // Note: quality might be .quality(80) or .quality({ quality: 80 })?
        // Let's try .quality({ quality: 80 }) based on the error "quality is not a function" on the Promise.
        await image.quality({ quality: 80 });

        await image.write(filePath); // v1 uses write which returns a promise

        console.log(`Optimized ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
});
