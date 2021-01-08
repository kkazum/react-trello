const path = require('path');

module.exports = {
  entry: {
    kanban: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js','.ts','.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
  },
};
