import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.usistech.com'],
  },
  async redirects() {
    return [
      {
        source: "/solution/erpnext",
        destination: "/product/erpnext",
        permanent: true,
      },
      {
        source: "/solution/frappe-hr",
        destination: "/product/frappe-hr",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
