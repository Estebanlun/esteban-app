/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },
};

export default nextConfig;
