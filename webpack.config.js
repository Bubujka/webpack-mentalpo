const path = require('path');

module.exports  = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('www')
  }
};
