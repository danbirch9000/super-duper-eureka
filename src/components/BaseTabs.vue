<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    hash: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: null
    };
  },
  mounted() {
    if (this.hash && window.location.hash) {
      this.selected = window.location.hash.charAt(1);
    } else {
      this.selected = this.value;
    }
    this.$on("selected", val => {
      this.selected = val;
      this.$emit("input", val);
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  border-bottom: 2px solid $color-mono-7;
  margin-bottom: space(4);
}
</style>
