const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        allowedHosts: 'all',
        port: "8080",
        liveReload: true,
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },
    },
})
