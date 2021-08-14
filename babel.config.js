const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        targets: {
          edge: '10',
          firefox: '50',
          chrome: '52',
          safari: '8',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react'
    ],
    ['@babel/preset-typescript']
  ];
  
  const plugins = [
  ];
  
  module.exports = { presets, plugins };