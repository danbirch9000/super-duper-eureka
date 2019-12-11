/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BasePill from "@/components/BasePill.vue";

storiesOf("BasePill", module).add("Variations", () => ({
  components: { BasePill },
  template: `
      <div>
        <BasePill variant="default">
          0
        </BasePill>
        <BasePill variant="primary">
          1
        </BasePill>
        <BasePill variant="secondary">
          2
        </BasePill>
        <BasePill variant="success">
          3
        </BasePill>
        <BasePill variant="warning">
          4
        </BasePill>
        <BasePill variant="error">
          0123456789
        </BasePill>
      </div>
      `
}));
