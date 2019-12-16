/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { ActionMenu } from "@/components/nav/ActionMenu";

storiesOf("ActionMenu", module).add("Variations", () => ({
  data() {
    return {
      items: [
        {
          text: "Add",
          icon: "add",
          disabled: true,
          action: () => alert("Add")
        },
        {
          text: "Edit",
          icon: "edit",
          action: () => alert("Edit")
        },
        {
          text: "Delete",
          icon: "delete",
          action: () => alert("Delete")
        }
      ]
    };
  },
  components: {
    ActionMenu
  },
  template: `
    <div>
      <ActionMenu text="Actions" :items="items" />
    </div>
    `
}));
