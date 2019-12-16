<template>
  <VButton v-bind="$props" v-on="$listeners">
    <template v-if="right">
      <slot /> <VIcon :variant="variant" :size="size" />
    </template>
    <template v-else>
      <VIcon :variant="variant" :size="size" /> <slot />
    </template>
  </VButton>
</template>

<script>
import { VIcon } from "@/components/VIcon";
import { VButton } from "@/components/VButton";
export default {
  name: "IconButton",
  components: {
    VButton,
    VIcon
  },
  props: {
    ...VButton.props,
    variant: {
      type: String,
      default: ""
    },
    right: {
      type: Boolean,
      default: false
    }
  }
};
</script>
