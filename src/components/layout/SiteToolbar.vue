<template>
  <div class="toolbar">
    <SiteWrapper size="lg">
      <div class="toolbar-inner">
        <slot />
      </div>
    </SiteWrapper>
  </div>
</template>

<script>
import SiteWrapper from "@/components/layout/SiteWrapper";
export default {
  name: "SiteToolbar",
  components: {
    SiteWrapper
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  background: $color-brand-dark-blue;
}
.toolbar-inner {
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
