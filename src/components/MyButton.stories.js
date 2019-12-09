/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "../components/MyButton.vue";

storiesOf("MyButton", module)
  .add("with text", () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello BaseButton</my-button>',
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo("BaseButton", "with some emoji") }
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  }));
