<template>
  <div class="tab">
    <a
      :href="`#${this.target}`"
      class="tab-btn"
      :class="{ 'tab-btn-active': this.$parent.selected == this.target }"
      @click="handleClick"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: "BaseTab",
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
      this.$parent.$emit("selected", this.target);
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
