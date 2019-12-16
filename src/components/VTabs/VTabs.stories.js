/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { VPill } from "@/components/VPill";
import { VTabs, VTabsItem } from "@/components/VTabs";
import { VIcon } from "@/components/VIcon";

storiesOf("VTabs", module).add("Variations", () => ({
  components: {
    VTabsItem,
    VTabs,
    VIcon,
    VPill
  },
  data() {
    return {
      tab: "2"
    };
  },
  template: `
      <div>
        <VTabs v-model="tab" hash>
          <VTabsItem target="1">
            <VPill theme="primary">3</VPill>
            Tab
          </VTabsItem>
          <VTabsItem target="2">
            <VIcon variant="cog" />
            Tab 2
          </VTabsItem>
          <VTabsItem target="3">
            Tab 3
          </VTabsItem>
        </VTabs>

        <template v-if="tab == 2" inset>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo neque
          blanditiis quae adipisci vitae quaerat. Animi architecto similique odio in
          cum. Distinctio tenetur doloremque nemo quos cupiditate nam, a sed?
        </template>
      </div>
      `
}));
