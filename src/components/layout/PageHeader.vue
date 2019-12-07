<template>
  <header>
    <SiteWrapper>
      <h2 class="h4 page-header">
        <slot />
      </h2>
    </SiteWrapper>
  </header>
</template>

<script>
import SiteWrapper from "@/components/layout/SiteWrapper";
export default {
  name: "PageHeader",
  components: {
    SiteWrapper
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  padding-bottom: space(3);
  border-bottom: 1px solid $color-mono-6;
}
</style>
