/* eslint-disable import/no-extraneous-dependencies */
import { configure, addParameters } from "@storybook/vue";
// import { themes } from "@storybook/theming";
import theme from "./theme";

addParameters({
  options: {
    theme
  }
});

configure(require.context("../src", true, /\.stories\.js$/), module);
