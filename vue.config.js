module.exports = {
  css: {
    /**
     * Inline css into bundled js in dist/
     */
    extract: false,
    /**
     * Expose scss in all .vue files
     */
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },

  chainWebpack: config => {
    /**
     * Use html loader to import and inline svg icons
     */
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("html-loader")
      .loader("html-loader")
      .options({
        minimize: true
      });
    /**
     * Autofix eslint on save
     */
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};
