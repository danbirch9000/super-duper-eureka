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
  /**
   * Autofix eslint on save
   */
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};
