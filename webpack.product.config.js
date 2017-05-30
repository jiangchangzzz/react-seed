const package=require('./package.json');
const path = require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname,'app/index.js'),
    vendor: Object.keys(package.dependencies)
  },
  output: {
    path: __dirname+'/build',
    //加入8位的hash值方便更新
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
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
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                 {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
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
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
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
        })
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  plugins: [
    //html模板插件
    new HtmlWebpackPlugin({
      template: __dirname+'/app/index.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    //最小化生成的包
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),

    //分离css和js文件
    new ExtractTextPlugin('css/[name].[chunkhash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash:8].js'
    })
  ]     
};