const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectDir = path.join("public", "project");
const backupDir = path.join("public", "project_backup");

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const files = fs.readdirSync(projectDir);

files.forEach((file) => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(projectDir, file);
    const backupPath = path.join(backupDir, file);

    // Backup if not exists
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    // Command to resize and compress
    // Using --resize for width 1200
    // Using --mozjpeg for quality 75
    // Output directory is same as input to overwrite
    const cmd = `npx -y @squoosh/cli --resize "{\\"enabled\\":true,\\"width\\":1200}" --mozjpeg "{\\"quality\\":75}" -d "${projectDir}" "${inputPath}"`;

    console.log(`Processing ${file}...`);
    try {
      execSync(cmd, { stdio: "inherit" });
    } catch (e) {
      console.error(`Failed to process ${file}`, e);
    }
  }
});
