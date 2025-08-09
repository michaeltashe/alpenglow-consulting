import type { NextConfig } from "next";
import withPWA from 'next-pwa'
const path = require('path')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development'
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  }
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true
})(nextConfig);
