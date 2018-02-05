const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production';

const scopedNameForCSSClasses = isDev ?
    '[path]_[name]_[local]_[hash:base64:5]' :
    '[path]_[name]_[local]_[hash:base64:5]';

const paths = {
    src: {
        root: path.resolve(__dirname, './src'),
        entry: './app.js'
    },
    dist: {
        root: path.resolve(__dirname, './dist')
    }
};

const config = {
    context: paths.src.root,
    entry: paths.src.entry,
    output: {
        path: paths.dist.root,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            paths.src.root,
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: !isDev,
                            localIdentName: scopedNameForCSSClasses
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [],
                            import: [
                                path.resolve(paths.src.root, 'common/styles/index.styl')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    //devtool: isDev ? 'sourcemap' : false,
    devtool: 'sourcemap',
    plugins: isDev ? [
        new webpack.DefinePlugin({
            'APP_CONFIG': JSON.stringify(require('config'), null, 4)
        })
    ] : [
        new UglifyJsPlugin()
    ]
};

module.exports = config;
