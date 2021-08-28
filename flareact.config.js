module.exports = {
  webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    if (!config.resolve.alias) config.resolve.alias = Object.assign({})
    //Object.assign(config.resolve.alias, {});
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // must be below test-utils
      'react/jsx-runtime': 'preact/jsx-runtime',
      'react-render-to-string': 'preact-render-to-string',
      'react-ssr-prepass': 'preact-ssr-prepass',
    })
    return config
  },
};


