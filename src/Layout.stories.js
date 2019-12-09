/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
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

storiesOf("Layouts", module).add("Variations", () => ({
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
  },
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
  template: `
    <div id="app">
      <SiteToolbar>
        <SiteToolbarNav />
      </SiteToolbar>
      <SiteHeader v-slot="" />
      <Breadcrumb :items="breadcrumb" />
      <PageHeader>
        Page header
      </PageHeader>      
      <PageWrapper>

      </PageWrapper>
    </div>
    `
}));
