module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    'transform-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@ui': './src/ui',
          '@lib': './src/lib',
          '@api': './src/api',
          '@features': './src/features',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@assets': './src/assets',
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
