/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import DropdownMenu from "@/components/nav/DropdownMenu.vue";
import VCard from "@/components/VCard";
import VIcon from "@/components/VIcon";
import VButton from "@/components/VButton";

storiesOf("DropdownMenu", module).add("Variations", () => ({
  data() {
    return {
      items: [
        {
          text: "List item",
          action: () => alert("This action")
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
    VCard,
    VIcon,
    VButton
  },
  template: `
    <div>
      <DropdownMenu text="Click me" :items="items" />
      <br/><br/>
      <DropdownMenu text="Click me" :items="items" position="right"/>
      <br/><br/>
      <DropdownMenu>
        <template v-slot:menu-button="{ on }">
          <VButton size="sm" theme="primary" v-on="on">
            <VIcon variant="cog" />
            Custom button
          </VButton>
        </template>
        <VCard>
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
        </VCard>
      </DropdownMenu>
    </div>
    `
}));
