<template>
  <div class="menu">
    <span class="menu-button">
      <slot name="menu-button" :on="on" />
    </span>
    <div class="menu-inner">
      <div class="menu-nav">
        <slot v-if="active" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  data() {
    return {
      active: false
    };
  },
  computed: {
    on() {
      return {
        click: this.handleClick
      };
    }
  },
  methods: {
    handleClick() {
      this.toggleMenu();
    },
    toggleMenu() {
      return this.active ? this.hideMenu() : this.showMenu();
    },
    showMenu() {
      this.active = true;
      this.$emit("active", true);
      document.addEventListener("click", this.handleGlobalClick);
    },
    hideMenu() {
      this.active = false;
      this.$emit("active", false);
      document.removeEventListener("click", this.handleGlobalClick);
    },
    handleGlobalClick(e) {
      return this.$el
        .getElementsByClassName("menu-button")[0]
        .contains(e.target)
        ? undefined
        : this.hideMenu();
    }
  }
};
</script>

<style lang="scss" scoped>
.menu,
.menu-button,
.menu-button /deep/ * {
  height: inherit;
}
.menu-inner {
  position: relative;
}
.menu-nav {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0px, 10px, 0px);
}
</style>
