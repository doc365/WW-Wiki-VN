module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': 'off', // Disable PropTypes validation
      'react/display-name': 'off', // Optional: Disable display name warning
    },
  };
  