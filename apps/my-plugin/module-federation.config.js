module.exports = {
  name: 'my-plugin',
  exposes: {
    './Module': './src/remote-entry.ts',
    './pluginStart': './src/app/lifecycle/pluginStart.ts',
    './Tool': './src/app/tools/Tool.tsx',
  },
};
