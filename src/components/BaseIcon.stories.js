/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BaseIcon from "@/components/BaseIcon.vue";

storiesOf("BaseIcon", module).add("Variations", () => ({
  components: { BaseIcon },
  template: `
      <div>
        <BaseIcon type="cog"/>
        <BaseIcon type="cog" size="sm"/>
        <BaseIcon type="cog" size="lg"/>
      </div>
      `
}));
