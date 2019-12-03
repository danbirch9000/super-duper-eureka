module.exports = {
  css: {
    /**
     * Inline css into bundled js in dist/
     */
    extract: false,
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
