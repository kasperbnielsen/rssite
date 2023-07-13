/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ 
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: 'wikipedia/commons/thumb/a/a7/React-icon.svg/**'
            },
        ],
    },

}

module.exports = nextConfig
