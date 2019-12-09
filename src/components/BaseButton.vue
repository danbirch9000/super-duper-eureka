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
  border: 3px solid rgba($color-primary, 0);
  &:hover,
  &:focus {
    border: 3px solid rgba($color-primary, 1);
  }
}
.btn-disabled {
  background: $color-mono-7;
  cursor: not-allowed;
  &:hover,
  &:focus {
    border: 3px solid rgba($color-primary, 0);
  }
}

.btn-default {
  background: none;
  color: inherit;
  border-radius: 0;
  &:hover,
  &:focus {
    border: 3px solid rgba($color-primary, 0);
  }
}
.btn-primary {
  background: $color-primary;
}
.btn-secondary {
  background: $color-secondary;
}
.btn-info {
  background: $color-info;
}
.btn-success {
  background: $color-success;
}
.btn-warning {
  background: $color-warning;
}
.btn-error {
  background: $color-error;
}
[class*="-outline"] {
  background: none;
}
.btn-primary-outline {
  border: 3px solid rgba($color-primary, 1);
  color: $color-primary;
}
.btn-secondary-outline {
  border: 3px solid rgba($color-secondary, 1);
  color: $color-secondary;
}
.btn-info-outline {
  border: 3px solid rgba($color-info, 1);
  color: $color-info;
}
.btn-success-outline {
  border: 3px solid rgba($color-success, 1);
  color: $color-success;
}
.btn-warning-outline {
  border: 3px solid rgba($color-warning, 1);
  color: $color-warning;
}
.btn-error-outline {
  border: 3px solid rgba($color-error, 1);
  color: $color-error;
}

/**
  * Size
  */
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
/**
 * Other
 */
.btn-block {
  display: block;
}
</style>
