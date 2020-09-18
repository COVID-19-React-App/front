const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    entry: path.resolve(srcPath, 'index.js'),
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePath: [srcPath]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: path.resolve(srcPath, 'index.html')})],
    devServer: {
        contentBase: buildPath,
        host: 'localhost',
        port: 9002,
    }
}


