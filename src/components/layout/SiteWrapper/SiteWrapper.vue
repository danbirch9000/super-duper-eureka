<template>
  <div :class="`wrapper-${size}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    size: {
      type: String,
      default: "md"
    }
  }
};
</script>

<style lang="scss" scoped>
[class^="wrapper"] {
  margin: 0 auto;
  padding: 0 space(4);
}
.wrapper-xs {
  max-width: $breakpoint-xs;
}
.wrapper-sm {
  max-width: $breakpoint-sm;
}
.wrapper-md {
  max-width: $breakpoint-md;
}
.wrapper-lg {
  max-width: $breakpoint-lg;
}
</style>
