/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import OffCanvas from "@/components/OffCanvas.vue";

storiesOf("OffCanvas", module).add("Variations", () => ({
  components: { OffCanvas },
  data() {
    return {
      offcanvas: false
    };
  },
  template: `
  <div>
    <OffCanvas v-model="offcanvas" title="Do this task">
      <template v-slot:header>
        Some heading
      </template>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
      velit quod reprehenderit sapiente adipisci natus, quisquam magni fuga sunt
      omnis quos ab ducimus cum, dolores vel officia facere suscipit. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Et recusandae velit
      quod reprehenderit sapiente adipisci natus, quisquam magni fuga sunt omnis
      <template v-slot:footer>
        <OffCanvasNav />
      </template>
    </OffCanvas>
    <button @click="offcanvas = !offcanvas">Open {{ offcanvas }}</button>
  </div>
    `
}));
