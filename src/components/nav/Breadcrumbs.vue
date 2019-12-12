<template>
  <nav class="breadcrumb">
    <SiteWrapper size="lg">
      <div class="breadcrumb-inner">
        <ul class="breadcrumb-nav">
          <li v-for="(item, index) in items" :key="index">
            <template v-if="item.to">
              <BaseLink :to="item.to">{{ item.text }}</BaseLink>
              <BaseIcon variant="chevron-right" />
            </template>
            <template v-else>{{ item.text }}</template>
          </li>
        </ul>
      </div>
    </SiteWrapper>
  </nav>
</template>

<script>
import SiteWrapper from "@/components/layout/SiteWrapper";
import BaseLink from "@/components/BaseLink";
import BaseIcon from "@/components/BaseIcon";
export default {
  name: "Breadcrumbs",
  components: {
    SiteWrapper,
    BaseLink,
    BaseIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  background: $color-brand-white;
}
.breadcrumb-nav {
  height: 48px;
  display: flex;
  align-items: center;
}
.breadcrumb-nav {
  @include list-no-style();
  display: flex;
  li {
    font-weight: $font-weight-bold;
    margin-right: space(1);
  }
  a {
    padding: space(2);
  }
}
</style>
