const path = require('path');
const webpackMerge = require('webpack-merge');
const { spawn } = require('child_process');

const commonConfig = require('./webpack.config.common');
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const defaultInclude = [SRC_DIR];

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: defaultInclude
            }
        ]
    },
    devServer: {
        contentBase: OUTPUT_DIR,
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
            children: false,
            hotOnly: true
        },
        before() {
            spawn(
                    'electron', ['.'], {
                        shell: true,
                        env: {
                            ...process.env,
                            'NODE_ENV': 'development'
                        },
                        stdio: 'inherit'
                    }
                )
                .on('close', code => process.exit(0))
                .on('error', spawnError => console.error(spawnError))
        }
    }
});
