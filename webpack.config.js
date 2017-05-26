const path = require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const OpenBrowserPlugin=require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'app/main.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function(){
                return [autoprefixer];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function(){
                return [autoprefixer];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'eval-source-map',

  plugins: [
    //html模板插件
    new HtmlWebpackPlugin({
      template: __dirname+'/app/index.html'
    }),

    //热加载插件
    new webpack.HotModuleReplacementPlugin(),

    //打开浏览器插件
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],

  devServer: {
    historyApiFallback: true, 
    inline: true, 
    hot: true
  }
        
};