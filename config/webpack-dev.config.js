const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js',
    main: './src/main.js',
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, '../build'),
  },
};
