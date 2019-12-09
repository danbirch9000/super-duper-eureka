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
  background: $color-default;
}
.pill-primary {
  background: $color-primary;
}
.pill-secondary {
  background: $color-secondary;
}
.pill-info {
  background: $color-info;
}
.pill-success {
  background: $color-success;
}
.pill-warning {
  background: $color-warning;
}
.pill-error {
  background: $color-error;
}
</style>
