const path = require('path');
const TextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const StylesPlugin = new TextPlugin({ filename: './css/styles.bundle.css' }); // path relative to output path of webpack
const IndexPlugin = new HtmlPlugin({
    template: './src/index.html',
    title: 'Ear recognition',
});

module.exports = {
    entry: './src/js/renderer.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve('node_modules'),
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: TextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    plugins: [
        StylesPlugin,
        IndexPlugin
    ],
    node: {
        fs: 'empty'
    }
}
