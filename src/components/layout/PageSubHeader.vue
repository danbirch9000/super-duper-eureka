<template>
  <header>
    <SiteWrapper>
      <slot />
    </SiteWrapper>
  </header>
</template>

<script>
import SiteWrapper from "@/components/layout/SiteWrapper";
export default {
  name: "PageSubHeader",
  components: {
    SiteWrapper
  }
};
</script>

<style lang="scss" scoped></style>
