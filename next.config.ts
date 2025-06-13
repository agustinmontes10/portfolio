import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 🔥 Esto ignora errores de ESLint en el build
  },
};

export default nextConfig;
