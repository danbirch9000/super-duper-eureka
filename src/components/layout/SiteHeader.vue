<template>
  <header class="header" role="banner">
    <SiteWrapper size="lg">
      <div class="header-inner">
        <BaseLink to="/">
          <SiteLogo class="logo" />
        </BaseLink>
      </div>
    </SiteWrapper>
  </header>
</template>

<script>
import SiteLogo from "./SiteLogo.vue";
import SiteWrapper from "@/components/layout/SiteWrapper";
import BaseLink from "@/components/BaseLink";

export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    SiteWrapper,
    BaseLink
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
