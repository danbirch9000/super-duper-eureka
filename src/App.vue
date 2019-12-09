<template>
  <div id="app">
    <SiteToolbar>
      <SiteToolbarNav />
    </SiteToolbar>
    <SiteHeader v-slot="" />
    <Breadcrumb :items="breadcrumb" />
    <PageHeader>
      Page header
    </PageHeader>
    <PageSubHeader>
      Page sub heder
    </PageSubHeader>
    <PageWrapper>
      <div class="container">
        <DropdownMenu>
          <template v-slot:menu-button="{ on }">
            <BaseButton v-on="on">
              Go to section <BaseIcon type="chevron-down" />
            </BaseButton>
          </template>
          My list
        </DropdownMenu>
      </div>
    </PageWrapper>
  </div>
</template>

<script>
import SiteToolbar from "@/components/layout/SiteToolbar.vue";
import SiteHeader from "@/components/layout/SiteHeader.vue";
import SiteToolbarNav from "@/components/layout/SiteToolbarNav.vue";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHeader from "@/components/layout/PageHeader";
import PageSubHeader from "@/components/layout/PageSubHeader";
import Breadcrumb from "@/components/nav/Breadcrumb";
import DropdownMenu from "@/components/nav/DropdownMenu";
import BaseButton from "@/components/BaseButton";
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "App",
  components: {
    SiteToolbar,
    SiteToolbarNav,
    SiteHeader,
    PageWrapper,
    PageHeader,
    PageSubHeader,
    Breadcrumb,
    DropdownMenu,
    BaseButton,
    BaseIcon
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "Home",
          to: "#"
        },
        {
          text: "Page title"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
// required to pre-import main.scss
</style>
