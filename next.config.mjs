/** @type {import('next').NextConfig} */
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
