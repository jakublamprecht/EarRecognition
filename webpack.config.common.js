const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const IndexPlugin = new HtmlPlugin({
    template: './src/index.html',
    title: 'Ear recognition',
});

const SRC_DIR = path.resolve(__dirname, 'src');
const ADDON_BUILD = path.resolve(__dirname, 'build');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const defaultInclude = [SRC_DIR];

module.exports = {
    mode: 'development',
    entry: SRC_DIR + '/js/renderer.js',
    output: {
        path: OUTPUT_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ],
                include: defaultInclude
            },
            {
                test: /\.node$/,
                use: 'node-loader',
                include: ADDON_BUILD
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                use: [{
                    loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'
                }],
                include: defaultInclude
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'
                }],
                include: defaultInclude
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            EarProcessing$: path.resolve(__dirname, './src/js/core/earProcessing.js'),
            Core: path.resolve(__dirname, './src/js/core/'),
            Views: path.resolve(__dirname, './src/js/views/'),
            Containers: path.resolve(__dirname, './src/js/components/containers/'),
            Presentational: path.resolve(__dirname, './src/js/components/presentational/'),
        }
    },
    target: 'electron-renderer',
    plugins: [
        IndexPlugin
    ],
    devtool: 'cheap-source-map',
    node: {
        fs: 'empty'
    },
    // bindings didn't work without that
    externals: {
        bindings: 'require("bindings")'
    }
};
