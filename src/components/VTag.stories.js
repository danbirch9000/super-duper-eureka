/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import VTag from "@/components/VTag.vue";

storiesOf("VTag", module).add("Variations", () => ({
  components: { VTag },
  template: `
      <div>
        <VTag theme="default">
          Default
        </VTag>
        <VTag theme="primary">
          Primary
        </VTag>
        <VTag theme="secondary">
          Secondary
        </VTag>
        <VTag theme="success">
          Success
        </VTag>
        <VTag theme="warning">
          Warning
        </VTag>
        <VTag theme="error">
          Error
        </VTag>
      </div>
      `
}));
