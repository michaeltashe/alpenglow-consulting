import type { NextConfig } from "next";
import withPWA from 'next-pwa'

const nextConfig: any = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development'
  }
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true
})(nextConfig);
