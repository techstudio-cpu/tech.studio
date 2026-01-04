const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const sourceDir = path.join(rootDir, "public", "web-ocean");
const targetDir = path.join(rootDir, "out", "web-ocean");

function copyWebOceanAssets() {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`[copy-web-ocean] source directory missing: ${sourceDir}`);
    return;
  }

  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });

  fs.cpSync(sourceDir, targetDir, { recursive: true });
  console.log(`[copy-web-ocean] Copied assets from ${sourceDir} to ${targetDir}`);
}

try {
  copyWebOceanAssets();
} catch (error) {
  console.error("[copy-web-ocean] Failed to copy Web Ocean assets:", error);
  process.exitCode = 1;
}
