/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/user/:slug*',
        destination: 'http://42.192.157.113/:8080:/user/:slug*', // Matched parameters can be used in the destination
      },
    ]
  },
}
