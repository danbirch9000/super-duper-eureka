<template>
  <div :class="`tag tag-${variant}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseTag",
  props: {
    variant: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  font-weight: $font-weight-bold;
  border-radius: $border-radius-sm;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: space(1) space(2);
  font-size: $font-size-xs;
  color: white;
  line-height: 16px;
}
.tag-default {
  background: $color-theme-default;
}
.tag-primary {
  background: $color-theme-primary;
}
.tag-secondary {
  background: $color-theme-secondary;
}
.tag-info {
  background: $color-theme-info;
}
.tag-success {
  background: $color-theme-success;
}
.tag-warning {
  background: $color-theme-warning;
}
.tag-error {
  background: $color-theme-error;
}
</style>
