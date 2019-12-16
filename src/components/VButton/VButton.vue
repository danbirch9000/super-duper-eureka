<template>
  <button :class="styles" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    theme: {
      type: String,
      default: "default",
      validator: val =>
        [
          "blank",
          "default",
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "default-outline",
          "primary-outline",
          "secondary-outline",
          "info-outline",
          "success-outline",
          "warning-outline",
          "error-outline"
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
    styles() {
      let { theme, size, disabled, block } = this;
      theme = disabled ? "disabled" : theme;
      let styles = `btn btn-${theme} btn-${size}`;
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
  border: 3px solid rgba($color-theme-primary, 0);
  &:hover,
  &:focus {
    border: 3px solid rgba($color-theme-primary, 1);
  }
}
.btn-disabled {
  background: $color-mono-7;
  cursor: not-allowed;
  &:hover,
  &:focus {
    border: 3px solid rgba($color-theme-primary, 0);
  }
}

.btn-default {
  background: $color-theme-default;
}
.btn-blank {
  background: none;
  color: inherit;
  border-radius: 0;
  &:hover,
  &:focus {
    border: 3px solid rgba($color-theme-primary, 0);
  }
}
.btn-primary {
  background: $color-theme-primary;
}
.btn-secondary {
  background: $color-theme-secondary;
}
.btn-info {
  background: $color-theme-info;
}
.btn-success {
  background: $color-theme-success;
}
.btn-warning {
  background: $color-theme-warning;
}
.btn-error {
  background: $color-theme-error;
}
[class*="-outline"] {
  background: none;
}
.btn-primary-outline {
  border: 3px solid rgba($color-theme-primary, 1);
  color: $color-theme-primary;
}
.btn-secondary-outline {
  border: 3px solid rgba($color-theme-secondary, 1);
  color: $color-theme-secondary;
}
.btn-info-outline {
  border: 3px solid rgba($color-theme-info, 1);
  color: $color-theme-info;
}
.btn-success-outline {
  border: 3px solid rgba($color-theme-success, 1);
  color: $color-theme-success;
}
.btn-warning-outline {
  border: 3px solid rgba($color-theme-warning, 1);
  color: $color-theme-warning;
}
.btn-error-outline {
  border: 3px solid rgba($color-theme-error, 1);
  color: $color-theme-error;
}

/**
  * Size
  */
.btn-xs {
  padding: space(2);
  line-height: 10px;
  font-size: $font-size-xs;
}
.btn-sm {
  padding: space(3);
  line-height: 12px;
  font-size: $font-size-sm;
}
.btn-md {
  padding: space(4);
  line-height: 14px;
  font-size: $font-size-md;
}
.btn-lg {
  padding: space(5);
  line-height: 100%;
  font-size: $font-size-lg;
}
/**
 * Other
 */
.btn-block {
  display: block;
  width: 100%;
}
</style>
