/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import DataTable from "@/components/DataTable.vue";
import VTag from "@/components/VTag.vue";
import VPill from "@/components/VPill.vue";
import IconButton from "@/components/IconButton.vue";
import ActionMenu from "@/components/nav/ActionMenu";

storiesOf("DataTable", module).add("Variations", () => ({
  components: {
    DataTable,
    VTag,
    VPill,
    ActionMenu,
    IconButton
  },
  data() {
    return {
      headers: [
        {
          text: "Index",
          key: "index"
        },
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: true,
          key: "name"
        },
        { text: "Calories", key: "calories" },
        { text: "Fat (g)", key: "fat" },
        { text: "Carbs (g)", key: "carbs" },
        { text: "Protein (g)", key: "protein" },
        { text: "Iron (%)", key: "iron" },
        {
          key: "action"
        }
      ],
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.1,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  },
  methods: {
    getActionMenu(row) {
      return [
        {
          text: `Edit ${row.name}`,
          icon: "edit",
          action: () => alert(row.name)
        }
      ];
    }
  },
  template: `
  <div style="background: white;">
    <DataTable :headers="headers" :items="items">
      <template v-slot:index="{ index }">{{ index + 1 }}</template>
      <template v-slot:name="{ cell }">
        <VTag theme="primary">{{ cell }}</VTag>
      </template>
      <template v-slot:fat="{ cell }">
        <VPill theme="success">{{ cell }}</VPill>
      </template>
      <template v-slot:action="{ row }">
        <ActionMenu size="xs" :items="getActionMenu(row)" />
      </template>
    </DataTable>
  </div>
  `
}));
