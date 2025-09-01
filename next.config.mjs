// Enable static export for GitHub Pages and similar static hosts
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce fully static output in `out/`
  output: 'export',
  // Add basePath/assetPrefix only when provided (e.g., for project pages)
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  // Avoid Next/Image optimization on static hosts
  images: {
    unoptimized: true,
  },
  // Ensure directory-style URLs map to index.html files
  trailingSlash: true,
  // Keep build lenient as previously configured
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
