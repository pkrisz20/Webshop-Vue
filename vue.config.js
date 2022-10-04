module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/main.scss";`
            }
        }
    },
    // devServer: {
    //     proxy: process.env.VUE_APP_API_URL
    // },
    runtimeCompiler: true
};

chainWebpack: config => {
    config.module.use('eslint-loader').options({
        fix: true
    });
}