module.exports = {
  name: 'my-plugin',
  exposes: {
    './Module': './src/remote-entry.ts',
    './init': './src/app/lifecycle/pluginStart.ts',
    './Tool': './src/app/tools/Tool.tsx',
  },
};
