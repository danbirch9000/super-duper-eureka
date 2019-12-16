/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { VPill } from "@/components/VPill";

storiesOf("VPill", module).add("Variations", () => ({
  components: { VPill },
  template: `
      <div>
        <VPill theme="default">
          0
        </VPill>
        <VPill theme="primary">
          1
        </VPill>
        <VPill theme="secondary">
          2
        </VPill>
        <VPill theme="success">
          3
        </VPill>
        <VPill theme="warning">
          4
        </VPill>
        <VPill theme="error">
          0123456789
        </VPill>
      </div>
      `
}));
