const path = require('path');
const webpackMerge = require('webpack-merge');
const MiniCssExtract = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.config.common');
const SRC_DIR = path.resolve(__dirname, 'src');

const defaultInclude = [SRC_DIR];

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ],
                include: defaultInclude
            }
        ]
    },
    plugins: [
        new MiniCssExtract({
            filename: 'css/styles.bundle.css'
        })
    ]
});
