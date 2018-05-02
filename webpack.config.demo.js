const
  path = require('path'),
  HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/demo/demo.tsx',
  devtool: 'inline-source-map',
  devServer: {
    openPage: 'demo/demo.html',
  },
  
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            compilerOptions: {
              declaration: false,
              declarationDir: null 
            }
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  output: {
    filename: 'demo/demo-bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'demo/demo.html',
      template: 'src/demo/demo.tmpl',
      inject: 'body'
    })
  ]
};

