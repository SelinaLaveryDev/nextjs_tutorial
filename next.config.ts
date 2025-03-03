// Purpose: Configure Next.js to use the experimental PPR mode.
// This mode allows you to incrementally load pages in the background while the user is interacting with the current page.
// This is useful for improving the performance of your application by reducing the time it takes to load new pages.
// To enable PPR mode, set the experimental.ppr option to 'incremental' in the next.config.ts file.
// This will enable PPR mode for all pages in your application.
// the incremental value tells Next.js to load pages incrementally in the background while the user is interacting with the current page.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
