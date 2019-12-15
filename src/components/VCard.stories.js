/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import VCard from "@/components/VCard.vue";

storiesOf("VCard", module).add("Variations", () => ({
  components: { VCard },
  template: `
      <div>
        <VCard theme="default" size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </VCard>
        <VCard theme="primary" size="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </VCard>
        <VCard theme="secondary" size="lg" inset>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </VCard>
      </div>
      `
}));
