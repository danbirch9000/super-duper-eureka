<template>
  <div :class="`pill pill-${type}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BasePill",
  props: {
    type: {
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
  background: $color-mono-7;
}
.pill-primary {
  background: $color-brand-dark-blue;
}
.pill-secondary {
  background: $color-brand-blue;
}
.pill-info {
  background: $color-brand-blue;
}
.pill-success {
  background: $color-ui-success;
}
.pill-warning {
  background: $color-ui-warning;
}
.pill-error {
  background: $color-ui-error;
}
</style>
