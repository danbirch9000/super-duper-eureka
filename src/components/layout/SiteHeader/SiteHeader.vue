<template>
  <header class="header" role="banner">
    <SiteWrapper size="lg">
      <div class="header-inner">
        <VLink to="/">
          <SiteHeaderLogo class="logo" />
        </VLink>
      </div>
    </SiteWrapper>
  </header>
</template>

<script>
import SiteHeaderLogo from "./SiteHeaderLogo.vue";
import { SiteWrapper } from "@/components/layout/SiteWrapper";
import { VLink } from "@/components/VLink";

export default {
  name: "SiteHeader",
  components: {
    SiteHeaderLogo,
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
