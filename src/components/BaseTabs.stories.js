/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BasePill from "@/components/BasePill.vue";
import BaseTab from "@/components/BaseTab";
import BaseTabs from "@/components/BaseTabs";
import BaseIcon from "@/components/BaseIcon";

storiesOf("BaseTabs", module).add("Variations", () => ({
  components: {
    BaseTab,
    BaseTabs,
    BaseIcon,
    BasePill
  },
  data() {
    return {
      tab: "2"
    };
  },
  template: `
      <div>
        <BaseTabs v-model="tab" hash>
          <BaseTab target="1">
            <BasePill variant="primary">3</BasePill>
            Tab
          </BaseTab>
          <BaseTab target="2">
            <BaseIcon variant="cog" />
            Tab 2
          </BaseTab>
          <BaseTab target="3">
            Tab 3
          </BaseTab>
        </BaseTabs>

        <template v-if="tab == 2" inset>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo neque
          blanditiis quae adipisci vitae quaerat. Animi architecto similique odio in
          cum. Distinctio tenetur doloremque nemo quos cupiditate nam, a sed?
        </template>
      </div>
      `
}));
