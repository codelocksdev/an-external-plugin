const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const webpack = require('webpack');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config) => {
    console.log(config);
    return {
      ...config,
        plugins: [
          ...config.plugins,
          new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
        ]
    }
  }
);
