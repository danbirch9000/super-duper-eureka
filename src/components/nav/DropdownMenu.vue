<template>
  <div class="menu">
    <span ref="menuButton" class="menu-button">
      <slot name="menu-button" :on="on">
        <VButton :disabled="disabled" theme="blank" v-on="on">
          {{ text }}
          <VIcon :variant="active ? 'chevron-up' : 'chevron-down'" />
        </VButton>
      </slot>
    </span>
    <div class="menu-inner">
      <div ref="menuNav" class="menu-nav" :style="menuNavPosition">
        <slot v-if="active">
          <VCard :theme="theme">
            <div
              v-for="(item, index) in items"
              :key="index"
              tab-index="0"
              class="menu-nav-item"
              @click="item.action ? item.action : undefined"
            >
              {{ item.text }}
            </div>
          </VCard>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/VIcon";
import VButton from "@/components/VButton";
import VCard from "@/components/VCard";
export default {
  name: "DropdownMenu",
  components: {
    VIcon,
    VButton,
    VCard
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
    theme: {
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
      this.toggle();
    },
    toggle() {
      return this.active ? this.close() : this.open();
    },
    open() {
      this.active = true;
      this.$emit("active", true);
      document.addEventListener("click", this.handleGlobalClick);
    },
    close() {
      this.active = false;
      this.$emit("active", false);
      document.removeEventListener("click", this.handleGlobalClick);
    },
    handleGlobalClick(e) {
      return this.$el
        .getElementsByClassName("menu-button")[0]
        .contains(e.target)
        ? undefined
        : this.close();
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
  white-space: nowrap;
}
.menu-nav-item {
  padding: space(2) 0;
  cursor: pointer;
}
</style>
