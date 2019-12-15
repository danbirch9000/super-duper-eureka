<template>
  <div class="tab">
    <a
      :href="`#${target}`"
      class="tab-btn"
      :class="{ 'tab-btn-active': $parent.active == target }"
      @click.prevent="handleClick"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: "VTab",
  props: {
    target: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (this.$router && this.$parent.hash) {
        this.$router.push({ hash: `#${this.target}` });
      }
      this.$parent.$emit("active", this.target);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-btn {
  background: none;
  border: 0;
  font-weight: $font-weight-bold;
  color: $color-theme-primary;
  display: block;
  padding: space(3) space(4);
  position: relative;
  text-decoration: none;
  &:hover {
    color: $color-theme-secondary;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
  }
}
.tab-btn-active {
  &:after {
    background: $color-theme-secondary;
  }
}
</style>
