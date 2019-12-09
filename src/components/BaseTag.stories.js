/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BaseTag from "@/components/BaseTag.vue";

storiesOf("BaseTag", module).add("Variations", () => ({
  components: { BaseTag },
  template: `
      <div>
        <BaseTag type="default">
          Default
        </BaseTag>
        <BaseTag type="primary">
          Primary
        </BaseTag>
        <BaseTag type="secondary">
          Secondary
        </BaseTag>
        <BaseTag type="success">
          Success
        </BaseTag>
        <BaseTag type="warning">
          Warning
        </BaseTag>
        <BaseTag type="error">
          Error
        </BaseTag>        
      </div>
      `
}));
