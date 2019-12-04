module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  /**
   * Override cli preset and target all *.spec.js & __test__ files
   */
  testMatch: ["**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)"]
};
