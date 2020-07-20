const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// console.log(path.join(__dirname, 'src'));

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: 'http://localhost:9000',
        libraryTarget: 'var',
        library: 'Client'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        compress: true,
        port: 9000,
        stats: 'minimal',
        inline: true,
        hot: true
    },
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/.js$/',
                exclude: /node_modules/,
                use: [ 'babel-loader', 'eslint-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/client/media/favicon.png',
            publicPath: '',
            inject: true,
            favicons: {
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    firefox: false,
                    windows: false,
                    yandex: false,
                    favicons: true
                }
            }
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
};
