/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {

    if (isServer) {
      config.resolve.alias['superagent-proxy'] = false;
      config.plugins.push(new webpack.DefinePlugin({ "global.GENTLY": false }));
      config.resolve.alias['superagent'] = 'superagent/lib/client';
    }

    return config
  }
}

module.exports = nextConfig