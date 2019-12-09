/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BaseIcon from "@/components/BaseIcon.vue";

storiesOf("BaseIcon", module).add("Variations", () => ({
  components: { BaseIcon },
  template: `
      <div>
        <BaseIcon variant="cog"/>
        <BaseIcon variant="cog" size="sm"/>
        <BaseIcon variant="cog" size="lg"/>
      </div>
      `
}));
