<template>
  <div :class="`alert-message alert-message-${type}`">
    <slot name="icon">
      <BaseIcon :type="iconType" size="lg" class="icon" />
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
    type: {
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
      return iconMap[this.type];
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
  background: $color-mono-7;
}
.alert-message-info {
  background: $color-brand-blue;
}
.alert-message-success {
  background: $color-ui-success;
}
.alert-message-warning {
  background: $color-ui-warning;
}
.alert-message-error {
  background: $color-ui-error;
}

.icon {
  position: absolute;
  top: space(2);
  left: space(2);
}
</style>
