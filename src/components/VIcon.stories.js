/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import VIcon from "@/components/VIcon.vue";

storiesOf("VIcon", module).add("Variations", () => ({
  components: { VIcon },
  template: `
      <div>
        <VIcon variant="cog"/>
        <VIcon variant="cog" size="sm"/>
        <VIcon variant="cog" size="lg"/>
      </div>
      `
}));
