import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias['@libs'] = path.join(__dirname, 'libs');
    return config;
  }
};

export default nextConfig;
