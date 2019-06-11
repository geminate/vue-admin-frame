'use strict'

const path = require('path')

module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        host: '0.0.0.0',
        port: 8080,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true
    },
    build: {
        index: path.resolve(__dirname, `../dist/${process.env.NODE_ENV}/index.html`),
        assetsRoot: path.resolve(__dirname, `../dist/${process.env.NODE_ENV}`),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/xiaowei-h5/',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
