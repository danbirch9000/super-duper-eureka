/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import markdown from "@/components/BaseButton.md";
import BaseIcon from "@/components/BaseIcon.vue";
import BasePill from "@/components/BasePill.vue";

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
          <BaseButton variant="primary">
            Primary
          </BaseButton>
          <br/><br/>
          <BaseButton variant="secondary">
            Secondary
          </BaseButton>
          <br/><br/>
          <BaseButton variant="success">
            Success
          </BaseButton>
          <br/><br/>
          <BaseButton variant="warning">
            Warning
          </BaseButton>
          <br/><br/>
          <BaseButton variant="error">
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
          <BaseButton size="xs" variant="primary">
            Extra Small
          </BaseButton>
          <br/><br/>
          <BaseButton size="sm" variant="primary">
            Small
          </BaseButton>
          <br/><br/>
          <BaseButton size="md" variant="primary">
            Mediun
          </BaseButton>
          <br/><br/>
          <BaseButton size="lg" variant="primary">
            Large
          </BaseButton>
        </div>
      `
  }))
  .add("Outlines", () => ({
    components: { BaseButton },
    template: `
        <div>
          <BaseButton variant="primary-outline">
            Primary
          </BaseButton>
          <br/><br/>
          <BaseButton variant="secondary-outline">
            Secondary
          </BaseButton>
          <br/><br/>
          <BaseButton variant="success-outline">
            Success
          </BaseButton>
          <br/><br/>
          <BaseButton variant="warning-outline">
            Warning
          </BaseButton>
          <br/><br/>
          <BaseButton variant="error-outline">
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
    components: { BaseButton, BaseIcon, BasePill },
    template: `
        <div>
          <BaseButton variant="primary">
            <BaseIcon variant="cog" size="md" /> With icon
          </BaseButton>
          <br/><br/>
          <BaseButton variant="primary">
            <BaseIcon variant="cog" size="lg"/>
          </BaseButton>
          <br/><br/>
          <BaseButton variant="primary" size="md">
            <BasePill variant="info">3</BasePill> Notifications
          </BaseButton>
          <br/><br/>
        </div>
      `
  }));
