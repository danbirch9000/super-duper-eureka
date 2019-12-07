<template>
  <SiteWrapper>
    <main class="page-wrapper">
      <slot />
    </main>
  </SiteWrapper>
</template>

<script>
import SiteWrapper from "@/components/layout/SiteWrapper";
export default {
  name: "PageWrapper",
  components: {
    SiteWrapper
  }
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  background: $color-brand-white;
  padding: space(4);
  margin: space(4) 0 space(4) 0;
  box-shadow: $skin-box-shadow;
}
</style>
