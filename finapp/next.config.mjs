// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io", "via.placeholder.com"],
    },
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=0, must-revalidate',
              },
            ],
          },
        ];
      },
  };
  
  export default nextConfig;