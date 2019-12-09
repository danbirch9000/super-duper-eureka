/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BaseTag from "@/components/BaseTag.vue";

storiesOf("BaseTag", module).add("Variations", () => ({
  components: { BaseTag },
  template: `
      <div>
        <BaseTag variant="default">
          Default
        </BaseTag>
        <BaseTag variant="primary">
          Primary
        </BaseTag>
        <BaseTag variant="secondary">
          Secondary
        </BaseTag>
        <BaseTag variant="success">
          Success
        </BaseTag>
        <BaseTag variant="warning">
          Warning
        </BaseTag>
        <BaseTag variant="error">
          Error
        </BaseTag>        
      </div>
      `
}));
