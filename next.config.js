/** @type {import('next').NextConfig} */
const nextConfig = {
    //reactStrictMode: true,
    output: 'export',
};

module.exports = module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**',
            },
        ],
    },
    nextConfig,
};
