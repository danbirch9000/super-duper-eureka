<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span :class="`icon icon-${size}`" v-html="getPath" />
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: "md"
    }
  },
  computed: {
    getPath() {
      return require(`@/assets/icons/${this.variant}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  vertical-align: text-bottom;
  line-height: 0;
  /deep/ svg {
    color: inherit;
    width: inherit;
    height: inherit;
  }
}
.icon-xs {
  width: 12px;
  height: 12px;
}
.icon-sm {
  width: 14px;
  height: 14px;
}
.icon-md {
  width: 16px;
  height: 16px;
}
.icon-lg {
  width: 24px;
  height: 24px;
}
</style>
