const path = require("path");
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./public/js/",
    watch: true,
    watchOptions: {
        ignored: '**/node_modules',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: process.env.PORT || 8000,
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'scripts.bundle.js', // [name]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                beautify: false,
                ecma: 6,
                compress: true,
                comments: false
            }
        })
    ]
};