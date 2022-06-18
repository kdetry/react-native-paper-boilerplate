module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          screens: './src/screens',
          constants: './src/constants',
          components: './src/components',
          context: './src/context',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
