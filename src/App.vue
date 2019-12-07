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
        <h1>Headline one</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          molestias omnis officiis dolores consequuntur, voluptatum numquam
          nobis sint consectetur molestiae soluta pariatur at mollitia ullam
          delectus vel asperiores commodi ad!
        </p>
        <h2>Headline two</h2>
        <p class="p-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          molestias omnis officiis dolores consequuntur, voluptatum numquam
          nobis sint consectetur molestiae soluta pariatur at mollitia ullam
          delectus vel asperiores commodi ad!
        </p>
        <h3>Headline three</h3>
        <p class="p-sm">
          Lorem ipsum dolor <a href="#">some link</a> sit amet consectetur
          adipisicing elit. Error molestias omnis officiis dolores consequuntur,
          voluptatum numquam nobis sint consectetur molestiae soluta pariatur at
          mollitia ullam delectus vel asperiores commodi ad!
        </p>
        <h4>Headline four</h4>
        <p class="p-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          molestias omnis officiis dolores consequuntur, voluptatum numquam
          nobis sint consectetur molestiae soluta pariatur at mollitia ullam
          delectus vel asperiores commodi ad!
        </p>
        <ul>
          <li>Some list items</li>
          <li>Some list items</li>
          <li>Some list items</li>
          <li>Some list items</li>
        </ul>
        <h5>Headline five</h5>
        <DropdownMenu>
          <template v-slot:menu-button="{ on }">
            <BaseButton v-on="on">
              Go to section <BaseIcon type="chevron-down" />
            </BaseButton>
          </template>
          My list
        </DropdownMenu>
        <BaseButton>Default BaseButton</BaseButton>
        <BaseButton type="primary">
          <BaseIcon type="circle-info" size="md" />
          Primary BaseButton
        </BaseButton>
        <BaseButton type="secondary" size="xs">
          <BaseIcon type="circle-info" size="sm" /> Secondary BaseButton
        </BaseButton>
        <BaseButton type="success" size="sm" block>
          <BaseIcon type="circle-success" size="md" /> Success BaseButton
        </BaseButton>
        <BaseButton type="warning" size="md">
          <BaseIcon type="circle-warning" size="md" />
          Warning BaseButton
        </BaseButton>
        <BaseButton type="error" size="lg">
          <BaseIcon type="circle-error" size="lg" />
          Error BaseButton
        </BaseButton>
        <BaseButton disabled type="error" size="md">
          <BaseIcon type="cog" size="xl" />
        </BaseButton>
        <BaseTag>
          Some tag
        </BaseTag>
        <BasePill>1</BasePill>
        <AlertMessage type="success">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum.
        </AlertMessage>
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
import BaseTag from "@/components/BaseTag";
import BasePill from "@/components/BasePill";
import AlertMessage from "@/components/AlertMessage";

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
    BaseIcon,
    BaseTag,
    BasePill,
    AlertMessage
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
.btn {
  margin: 0 10px !important;
}
</style>
