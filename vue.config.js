const scss = `@import "~@/assets/scss/variable.scss";`
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    transpileDependencies: ['vue-clamp', 'resize-detector'],
    publicPath: '/resume-mode/', // 公共路径
    lintOnSave: false, // 关闭eslint
    productionSourceMap: false, // 生产环境下css 分离文件
    devServer: { // 配置服务器
        sockHost: 'localhost',
        port: 8888,
        // https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        disableHostCheck: true,
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    },
    css: {
        //extract: true, //是否使用css分离插件extraTextPlugin生产环境下是true,开发为false
        sourceMap: false,
        loaderOptions: {
            scss: {
                prependData: scss
            }
        },
        modules: false
    },
}

