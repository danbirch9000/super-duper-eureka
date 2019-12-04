module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],

  rules: {},

  parserOptions: {
    parser: "babel-eslint"
  },

  /**
   * Ignore all jest globals
   */
  overrides: [
    {
      files: ["**/*.spec.[jt]s?(x)", "**/__tests__/*.[jt]s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
