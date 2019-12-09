<template>
  <div :class="`alert-message alert-message-${variant}`">
    <slot name="icon">
      <BaseIcon :variant="iconType" size="lg" class="icon" />
    </slot>
    <div class="alert-message-inner">
      <slot />
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
export default {
  name: "AlertMessage",
  components: {
    BaseIcon
  },
  props: {
    variant: {
      type: String,
      default: "default"
    }
  },
  computed: {
    iconType() {
      const iconMap = {
        default: "circle-info",
        info: "circle-info",
        success: "circle-success",
        warning: "circle-warning",
        error: "circle-error"
      };
      return iconMap[this.variant];
    }
  }
};
</script>

<style lang="scss" scoped>
.alert-message {
  font-weight: $font-weight-medium;
  margin: space(3) 0;
  padding: space(3) space(2) space(3) 40px;
  color: white;
  position: relative;
}
.alert-message-default {
  background: $color-theme-default;
}
.alert-message-info {
  background: $color-theme-info;
}
.alert-message-success {
  background: $color-theme-success;
}
.alert-message-warning {
  background: $color-theme-warning;
}
.alert-message-error {
  background: $color-theme-error;
}

.icon {
  position: absolute;
  top: space(2);
  left: space(2);
}
</style>
