/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BasePill from "@/components/BasePill.vue";

storiesOf("BasePill", module).add("Variations", () => ({
  components: { BasePill },
  template: `
      <div>
        <BasePill type="default">
          0
        </BasePill>
        <BasePill type="primary">
          1
        </BasePill>
        <BasePill type="secondary">
          2
        </BasePill>
        <BasePill type="success">
          3
        </BasePill>
        <BasePill type="warning">
          4
        </BasePill>
        <BasePill type="error">
          5
        </BasePill>
      </div>
      `
}));
