/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/user/:slug*",
        destination: "http://42.192.157.113/:8080:/user/:slug*" // Matched parameters can be used in the destination
      }
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/user/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
