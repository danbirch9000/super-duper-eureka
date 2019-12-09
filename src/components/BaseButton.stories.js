/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import markdown from "@/components/BaseButton.md";
import BaseIcon from "@/components/BaseIcon.vue";

import BaseButton from "@/components/BaseButton.vue";

storiesOf("BaseButton", module)
  .add(
    "Solid",
    () => ({
      components: { BaseButton },
      template: `
        <div>
          <BaseButton @click="action">
            Default
          </BaseButton>
          <br/><br/>
          <BaseButton type="primary">
            Primary
          </BaseButton>
          <br/><br/>
          <BaseButton type="secondary">
            Secondary
          </BaseButton>
          <br/><br/>
          <BaseButton type="success">
            Success
          </BaseButton>
          <br/><br/>
          <BaseButton type="warning">
            Warning
          </BaseButton>
          <br/><br/>
          <BaseButton type="error">
            Error
          </BaseButton>
          <br/><br/>
          <BaseButton disabled>
            Disabled
          </BaseButton>
        </div>
        `,
      methods: { action: action("clicked") }
    }),
    {
      notes: { markdown }
    }
  )
  .add("Sizes", () => ({
    components: { BaseButton },
    template: `
        <div>
          <BaseButton size="xs" type="primary">
            Extra Small
          </BaseButton>
          <br/><br/>
          <BaseButton size="sm" type="primary">
            Small
          </BaseButton>
          <br/><br/>
          <BaseButton size="md" type="primary">
            Mediun
          </BaseButton>
          <br/><br/>
          <BaseButton size="lg" type="primary">
            Large
          </BaseButton>
        </div>
      `
  }))
  .add("Outlines", () => ({
    components: { BaseButton },
    template: `
        <div>
          <BaseButton type="primary-outline">
            Primary
          </BaseButton>
          <br/><br/>
          <BaseButton type="secondary-outline">
            Secondary
          </BaseButton>
          <br/><br/>
          <BaseButton type="success-outline">
            Success
          </BaseButton>
          <br/><br/>
          <BaseButton type="warning-outline">
            Warning
          </BaseButton>
          <br/><br/>
          <BaseButton type="error-outline">
            Error
          </BaseButton>
          <br/><br/>
          <BaseButton disabled>
            Disabled
          </BaseButton>
        </div>
      `
  }))
  .add("With icons", () => ({
    components: { BaseButton, BaseIcon },
    template: `
        <div>        
          <BaseButton type="primary">
            <BaseIcon type="cog" size="md" /> With icon
          </BaseButton>
          <br/><br/>
          <BaseButton type="primary">
            <BaseIcon type="cog" size="lg"/>
          </BaseButton>
          <br/><br/>          
        </div>
      `
  }));
