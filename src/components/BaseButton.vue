<template>
  <button :class="getStyles" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: val =>
        [
          "default",
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error"
        ].indexOf(val) !== -1
    },
    size: {
      type: String,
      default: "md",
      validator: val => ["xs", "sm", "md", "lg"].indexOf(val) !== -1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getStyles() {
      let { type, size, disabled, block } = this;
      type = disabled ? "disabled" : type;
      let styles = `btn btn-${type} btn-${size}`;
      styles += block ? ` btn-block` : ``;
      return styles;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  font-weight: $font-weight-bold;
  border: 0;
  border-radius: $border-radius-sm;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  color: white;
  line-height: 16px;
  &:hover,
  &:focus {
    box-shadow: inset 3px 0 0 $color-brand-dark-blue,
      inset -3px 0 0 $color-brand-dark-blue,
      inset 0 -3px 0 $color-brand-dark-blue,
      inset 0 3px 0 $color-brand-dark-blue;
  }
}
.btn-disabled {
  background: $color-mono-7;
  cursor: not-allowed;
}
.btn-default {
  background: none;
  color: inherit;
  border-radius: 0;
  &:hover,
  &:focus {
    box-shadow: none;
  }
}
.btn-primary {
  background: $color-brand-dark-blue;
}
.btn-secondary {
  background: $color-brand-blue;
}
.btn-info {
  background: $color-brand-blue;
}
.btn-success {
  background: $color-ui-success;
}
.btn-warning {
  background: $color-ui-warning;
}
.btn-error {
  background: $color-ui-error;
}
.btn-xs {
  padding: space(2);
  font-size: $font-size-xs;
}
.btn-sm {
  padding: space(3);
  font-size: $font-size-sm;
}
.btn-md {
  padding: space(4);
  font-size: $font-size-md;
}
.btn-lg {
  padding: space(5);
  font-size: $font-size-lg;
}
.btn-block {
  display: block;
}
</style>
