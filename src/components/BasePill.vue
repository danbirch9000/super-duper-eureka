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

  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0 space(2);
  font-size: $font-size-xs;
  color: white;
  line-height: 16px;
  position: relative;
  z-index: 3;
  &:after {
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    transform: translate(0, -(space(1)));
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 100px;
    padding: space(3) 0;
    display: block;
  }
}
.pill-default:after {
  background: $color-theme-default;
}
.pill-primary:after {
  background: $color-theme-primary;
}
.pill-secondary:after {
  background: $color-theme-secondary;
}
.pill-info:after {
  background: $color-theme-info;
}
.pill-success:after {
  background: $color-theme-success;
}
.pill-warning:after {
  background: $color-theme-warning;
}
.pill-error:after {
  background: $color-theme-error;
}
</style>
