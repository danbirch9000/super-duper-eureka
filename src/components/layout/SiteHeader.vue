<template>
  <header class="header" role="banner">
    <SiteWrapper size="lg">
      <div class="header-inner">
        <VLink to="/">
          <SiteLogo class="logo" />
        </VLink>
      </div>
    </SiteWrapper>
  </header>
</template>

<script>
import SiteLogo from "./SiteLogo.vue";
import SiteWrapper from "@/components/layout/SiteWrapper";
import VLink from "@/components/VLink";

export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    SiteWrapper,
    VLink
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: $color-brand-blue;
}
.header-inner {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  max-width: 160px;
}
</style>
