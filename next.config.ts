import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  partialPrefetching: true,
  // Classic is the lead design, so the site opens on it. Temporary (307) so
  // browsers don't cache it if a different design is picked later.
  redirects() {
    return [{ source: "/", destination: "/designs/classic", permanent: false }]
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
