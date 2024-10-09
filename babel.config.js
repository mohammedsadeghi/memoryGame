module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    // Reanimated plugin has to be listed last.
    'react-native-reanimated/plugin',
  ],
};
