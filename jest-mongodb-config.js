module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '7.0.8',
      skipMD5: true,
      downloadDir: 'node_modules/.cache/mongodb-memory-server',
    },
    autoStart: false,
    instance: {},
  },
};
