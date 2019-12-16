<template>
  <div class="tabs">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VTabs",
  model: {
    prop: "active",
    event: "active"
  },
  props: {
    active: {
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
      privateActive: null
    };
  },
  mounted() {
    if (this.hash && window.location.hash) {
      this.privateActive = window.location.hash.charAt(1);
    } else {
      this.privateActive = this.active;
    }
    this.$on("active", val => {
      this.privateActive = val;
      this.$emit("active", val);
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
