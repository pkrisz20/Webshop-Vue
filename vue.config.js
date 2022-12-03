module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/main.scss";`
            }
        }
    },
    runtimeCompiler: true
};

chainWebpack: config => {
    config.module.use('eslint-loader').options({
        fix: true
    });
    config
        .plugin('html')
        .tap(args => {
         //  args[0] contains the plugin's options object
        // change it to what you need it to be.
        return args
    });
};