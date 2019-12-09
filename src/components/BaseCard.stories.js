/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import BaseCard from "@/components/BaseCard.vue";

storiesOf("BaseCard", module).add("Variations", () => ({
  components: { BaseCard },
  template: `
      <div>
        <BaseCard variant="default" size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </BaseCard>
        <BaseCard variant="primary" size="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </BaseCard>
        <BaseCard variant="secondary" size="lg" inset>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit, unde necessitatibus, ab accusamus veritatis expedita at ut quo quis nam nihil facere quam doloremque dicta. Molestiae sed voluptatem odio.
        </BaseCard>
      </div>
      `
}));
