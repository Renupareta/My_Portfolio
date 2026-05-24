/** @type {import('next').NextConfig} */
import fs from "fs";
import path from "path";

// Automatically copy assets to public directory at build time
try {
  const srcDir = path.join(process.cwd(), "src", "assets", "images");
  const destDir = path.join(process.cwd(), "public", "assets", "images");
  const rootDestDir = path.join(process.cwd(), "public");

  if (fs.existsSync(srcDir)) {
    // Ensure nested directories exist
    fs.mkdirSync(destDir, { recursive: true });
    fs.mkdirSync(rootDestDir, { recursive: true });

    const files = fs.readdirSync(srcDir);
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      const rootDestFile = path.join(rootDestDir, file);

      // Copy to public/assets/images/
      fs.copyFileSync(srcFile, destFile);

      // Also copy to public/ directory directly for root level fallbacks
      fs.copyFileSync(srcFile, rootDestFile);
    }
    console.log("[Build Prep] Successfully copied all local images to public folder.");
  }
} catch (error) {
  console.error("[Build Prep] Error copying portfolio images:", error);
}

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "My_Portfolio";

const nextConfig = {
  // If building in GitHub Actions, use standard static export and repository path config
  ...(isGithubActions
    ? {
        output: "export",
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {
        // Standard SSR/ISR config suitable for local development & Vercel
      }),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
