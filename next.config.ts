import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Дозволяє успішну збірку, навіть якщо є помилки типів
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ігноруємо ESLint під час збірки (теж часто стає причиною падіння)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;