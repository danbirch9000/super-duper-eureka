import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#1d3355",
  colorSecondary: "#0091cd",

  // UI
  appBg: "#eee",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", Arial, Helvetica, sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#1d3355",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#1d3355",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "#1d3355",
  inputBorderRadius: 4,

  brandTitle: "Hermes"
  // brandUrl: "https://example.com",
  // brandImage: "https://placehold.it/350x150"
});
