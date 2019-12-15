/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import markdown from "@/components/VButton.md";
import VIcon from "@/components/VIcon.vue";
import VPill from "@/components/VPill.vue";

import VButton from "@/components/VButton.vue";

storiesOf("VButton", module)
  .add(
    "Solid",
    () => ({
      components: { VButton },
      template: `
        <div>
          <VButton theme="blank" @click="action">
            Blank
          </VButton>
          <br/><br/>
          <VButton @click="action">
            Default
          </VButton>
          <br/><br/>
          <VButton theme="primary">
            Primary
          </VButton>
          <br/><br/>
          <VButton theme="secondary">
            Secondary
          </VButton>
          <br/><br/>
          <VButton theme="success">
            Success
          </VButton>
          <br/><br/>
          <VButton theme="warning">
            Warning
          </VButton>
          <br/><br/>
          <VButton theme="error">
            Error
          </VButton>
          <br/><br/>
          <VButton disabled>
            Disabled
          </VButton>
        </div>
        `,
      methods: { action: action("clicked") }
    }),
    {
      notes: { markdown }
    }
  )
  .add("Sizes", () => ({
    components: { VButton },
    template: `
        <div>
          <VButton size="xs" theme="primary">
            Extra Small
          </VButton>
          <br/><br/>
          <VButton size="sm" theme="primary">
            Small
          </VButton>
          <br/><br/>
          <VButton size="md" theme="primary">
            Mediun
          </VButton>
          <br/><br/>
          <VButton size="lg" theme="primary">
            Large
          </VButton>
        </div>
      `
  }))
  .add("Outlines", () => ({
    components: { VButton },
    template: `
        <div>
          <VButton theme="primary-outline">
            Primary
          </VButton>
          <br/><br/>
          <VButton theme="secondary-outline">
            Secondary
          </VButton>
          <br/><br/>
          <VButton theme="success-outline">
            Success
          </VButton>
          <br/><br/>
          <VButton theme="warning-outline">
            Warning
          </VButton>
          <br/><br/>
          <VButton theme="error-outline">
            Error
          </VButton>
          <br/><br/>
          <VButton disabled>
            Disabled
          </VButton>
        </div>
      `
  }))
  .add("With icons", () => ({
    components: { VButton, VIcon, VPill },
    template: `
        <div>
          <VButton theme="primary" size="lg">
            <VIcon variant="cog" size="lg"/> With text
          </VButton>
          <VButton theme="primary" size="md">
            <VIcon variant="cog" size="md" /> With text
          </VButton>
          <VButton theme="primary" size="sm">
            <VIcon variant="ellipsis" size="sm"/> With text
          </VButton>
          <VButton theme="primary" size="xs">
            <VIcon variant="ellipsis" size="xs" /> With text
          </VButton>
          <br/><br/>
          <VButton theme="primary" size="md">
            <VPill theme="info">3</VPill>
          </VButton>
          <br/><br/>
        </div>
      `
  }))
  .add("Layout", () => ({
    components: { VButton, VIcon, VPill },
    template: `
        <div>
          <VButton block theme="primary" size="lg">
            Block
          </VButton>
        </div>
      `
  }));
