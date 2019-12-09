<template>
  <div class="menu">
    {{ buttonHeight }}
    <span ref="menuButton" class="menu-button">
      <slot name="menu-button" :on="on">
        <BaseButton :disabled="disabled" v-on="on">
          {{ text }}
          <BaseIcon :variant="active ? 'chevron-up' : 'chevron-down'" />
        </BaseButton>
      </slot>
    </span>
    <div class="menu-inner">
      <div ref="menuNav" class="menu-nav" :style="menuNavPosition">
        <slot v-if="active">
          <BaseCard :variant="variant">
            <div
              v-for="(item, index) in items"
              :key="index"
              tab-index="0"
              class="menu-nav-item"
              @click="item.action ? item.action : undefined"
            >
              {{ item.text }}
            </div>
          </BaseCard>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import BaseButton from "@/components/BaseButton";
import BaseCard from "@/components/BaseCard";
export default {
  name: "DropdownMenu",
  components: {
    BaseIcon,
    BaseButton,
    BaseCard
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "bottom"
    },
    variant: {
      type: String,
      default: "default"
    },
    text: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false,
      menuNavPosition: ""
    };
  },
  computed: {
    on() {
      return {
        click: this.handleClick
      };
    },
    buttonHeight() {
      return this.$refs.menuButton && this.$refs.menuButton.clientHeight;
    }
  },
  mounted() {
    this.setMenuNavStyle();
  },
  methods: {
    setMenuNavStyle() {
      const { position, $refs } = this;
      let top;
      let left;
      if (position === "right") {
        top = 0;
        left = $refs.menuButton.clientWidth + 10;
      } else {
        top = $refs.menuButton.clientHeight + 10;
        left = 0;
      }
      this.menuNavPosition = `
        transform: translate3d(${left}px, ${top}px, ${0}px);
        min-width: ${$refs.menuButton.clientWidth}px;
      `;
    },
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
.menu {
  position: relative;
}
.menu-button {
  display: inline-block;
}
.menu-nav {
  position: absolute;
  z-index: $z-index-dropdown;
  top: 0;
  left: 0;
  color: $color-theme-primary;
}
.menu-nav-item {
  white-space: nowrap;
  padding: space(2) 0;
  cursor: pointer;
}
</style>
