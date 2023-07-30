/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://42.192.157.113:5432/api/:path*"
      }
    ];
  }
};
