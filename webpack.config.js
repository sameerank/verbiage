var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    entry: './frontend/js/entry',
    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./frontend/bundles/'),
        //naming convention webpack should use for your files
        // filename: '[name]-[hash].min.js',
        filename: 'bundle.min.js',
    },
    plugins: [
        //tells webpack where to store data about your bundles.
        new BundleTracker({filename: './webpack-stats.json'}),
        //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            uglifyOptions: {compress: true}
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '*']
    }
};