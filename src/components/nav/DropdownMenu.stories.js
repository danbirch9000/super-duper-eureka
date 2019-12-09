/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import DropdownMenu from "@/components/nav/DropdownMenu.vue";
import BaseCard from "@/components/BaseCard";
import BaseIcon from "@/components/BaseIcon";
import BaseButton from "@/components/BaseButton";

storiesOf("DropdownMenu", module).add("Variations", () => ({
  data() {
    return {
      items: [
        {
          text: "List item",
          action: () => console.log("This action")
        },
        {
          text: "Another list item"
        },
        {
          text: "Yet on more list item"
        }
      ]
    };
  },
  components: {
    DropdownMenu,
    BaseCard,
    BaseIcon,
    BaseButton
  },
  template: `
    <div>
      <DropdownMenu text="Click me" :items="items" />      
      <DropdownMenu text="Click me" :items="items" position="right"/>
      <DropdownMenu>
        <template v-slot:menu-button="{ on }">
          <BaseButton size="sm" v-on="on">
            <BaseIcon variant="cog" />
            Custom button
          </BaseButton>
        </template>
        <BaseCard>
          <div role="list">
            <div class="list-item">
              <span class="p">Custom menu</span>
              <span class="p-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Labore provident, excepturi porro quasi recusandae ullam eaque
                iste dignissimos. Velit nisi iusto corporis illo similique
                dolores laboriosam praesentium, quae facilis ut
              </span>
            </div>
          </div>
        </BaseCard>
      </DropdownMenu>
    </div>
    `
}));
