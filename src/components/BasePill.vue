<template>
  <div :class="`pill pill-${variant}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BasePill",
  props: {
    variant: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="scss" scoped>
.pill {
  font-weight: $font-weight-bold;
  border-radius: 100px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: space(1) space(2);
  font-size: $font-size-xs;
  color: white;
  line-height: 16px;
}
.pill-default {
  background: $color-theme-default;
}
.pill-primary {
  background: $color-theme-primary;
}
.pill-secondary {
  background: $color-theme-secondary;
}
.pill-info {
  background: $color-theme-info;
}
.pill-success {
  background: $color-theme-success;
}
.pill-warning {
  background: $color-theme-warning;
}
.pill-error {
  background: $color-theme-error;
}
</style>
