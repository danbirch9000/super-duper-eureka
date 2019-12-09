<template>
  <div :class="`tag tag-${type}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseTag",
  props: {
    type: {
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
  background: $color-default;
}
.tag-primary {
  background: $color-primary;
}
.tag-secondary {
  background: $color-secondary;
}
.tag-info {
  background: $color-info;
}
.tag-success {
  background: $color-success;
}
.tag-warning {
  background: $color-warning;
}
.tag-error {
  background: $color-error;
}
</style>
