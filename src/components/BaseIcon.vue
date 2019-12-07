<template>
  <span :class="`icon icon-${size}`" v-html="getPath" />
</template>

<script>
export default {
  props: {
    type: {
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
      return require(`../assets/icons/${this.type}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  /deep/ svg {
    color: inherit;
    width: inherit;
    height: inherit;
  }
}
.icon-sm {
  width: 12px;
  height: 12px;
}
.icon-md {
  width: 16px;
  height: 16px;
}
.icon-lg {
  width: 24px;
  height: 24px;
}
.icon-xl {
  width: 32px;
  height: 32px;
}
</style>
