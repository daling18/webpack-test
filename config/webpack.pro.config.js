const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
     mode: 'development',
     entry: {
         main: path.resolve(__dirname, '../src/main.js')
     },
     output: {
         filename: 'main.js',
         path: path.resolve(__dirname, '../dist')
        //  publicPath: 'www.baidu.com'
     },
     module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            { 
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024*200,
                            name: 'images/[hash:10].[name].[ext]'
                        }
                    }
                ]
            },
            { 
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'icon',
                            filename: '[hash:10].[name].[ext]'
                        }
                    },
                ]
            }
          ]
     },
     plugins: [
         new htmlwebpackplugin({
             template: './telepate.html'
         }),
         new MiniCssExtractPlugin({
             filename: 'static/[name].css'
         }),
         new CleanWebpackPlugin()
     ]
}