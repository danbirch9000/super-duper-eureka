<template>
  <div class="off-canvas">
    <Animator variant="slide-right">
      <div
        v-if="isActive"
        class="off-canvas-inner"
        :class="{ active: isActive }"
      >
        <button class="off-canvas-btn" @click="close">
          <VIcon variant="close" size="lg" />
        </button>
        <div class="off-canvas-content">
          <div v-if="$scopedSlots.header || title" class="off-canvas-header">
            <h5 v-if="title" class="off-canvas-heading">{{ title }}</h5>
            <slot v-else name="header" />
          </div>
          <div class="off-canvas-body">
            <slot />
          </div>
          <div
            v-if="$scopedSlots.footer"
            ref="footer"
            class="off-canvas-footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Animator>
    <Animator>
      <div v-if="isActive" class="overlay"></div>
    </Animator>
  </div>
</template>

<script>
import VIcon from "@/components/VIcon";
import Animator from "@/components/Animator";
export default {
  name: "OffCanvas",
  components: {
    VIcon,
    Animator
  },
  model: {
    prop: "active",
    event: "active"
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  watch: {
    active() {
      this.handleActiveStatus();
    }
  },
  mounted() {
    this.handleActiveStatus();
  },
  destroyed() {
    this.close();
  },
  methods: {
    handleActiveStatus() {
      this.isActive = this.active;
      if (this.isActive) {
        this.open();
      } else {
        this.close();
      }
    },
    open() {
      this.toggleBodyClass("add", "body-no-scroll");
      this.isActive = true;
      this.emit();
      setTimeout(() => {
        document.addEventListener("click", this.handleGlobalClick);
      }, 0);
    },
    close() {
      this.toggleBodyClass("remove", "body-no-scroll");
      this.isActive = false;
      this.emit();
      document.removeEventListener("click", this.handleGlobalClick);
    },
    emit() {
      this.$emit("active", this.isActive);
    },
    toggleBodyClass(method, className) {
      const el = document.body;
      el.classList[method](className);
    },
    handleGlobalClick(e) {
      return this.$el
        .getElementsByClassName("off-canvas-content")[0]
        .contains(e.target)
        ? undefined
        : this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.off-canvas-inner {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 33%;
  min-width: 400px;
  box-shadow: $skin-box-shadow;
  z-index: $z-index-offcanvas;
}

.off-canvas-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: $color-brand-white;
}

.off-canvas-header {
  padding: space(4) space(6) 0 space(6);
}
.off-canvas-heading {
  padding: 0;
  margin: 0;
}
.off-canvas-body {
  padding: space(4) space(6);
  min-height: calc(100vh - 70px);
}
.off-canvas-footer {
  height: 70px;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: space(4) space(6);
}

.off-canvas-btn {
  @include button-no-style;
  top: space(4);
  left: -20px;
  border-radius: 100px;
  position: absolute;
  width: 40px;
  height: 40px;
  background: $color-brand-white;
  z-index: $z-index-offcanvas + 1;
  color: $color-theme-primary;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color-theme-primary, 0.9);
  display: block;
  z-index: $z-index-offcanvas-overlay;
}
</style>
