<template>
  <div :class="`card card-${theme} card-${size} ${inset ? 'card-inset' : ''}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
    theme: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "md"
    },
    inset: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: $skin-box-shadow;
  border-radius: $border-radius-sm;
}
.card-inset {
  box-shadow: $skin-box-shadow-inset;
}
.card-default {
  background: $color-brand-white;
}
.card-primary {
  background: $color-theme-primary;
  color: white;
}
.card-secondary {
  background: $color-theme-secondary;
  color: white;
}
.card-sm {
  padding: space(2);
}
.card-md {
  padding: space(4);
}
.card-lg {
  padding: space(6);
}
</style>
