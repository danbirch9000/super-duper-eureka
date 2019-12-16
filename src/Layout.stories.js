/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { SiteToolbar, SiteToolbarNav } from "@/components/layout/SiteToolbar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PageHeader, PageSubHeader } from "@/components/layout/PageHeader";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { DropdownMenu } from "@/components/nav/DropdownMenu";
import { VButton } from "@/components/VButton";
import { VIcon } from "@/components/VIcon";

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
    Breadcrumbs,
    DropdownMenu,
    VButton,
    VIcon
  },
  template: `
    <div id="app">
      <SiteToolbar>
        <SiteToolbarNav />
      </SiteToolbar>
      <SiteHeader />
      <Breadcrumbs :items="breadcrumb" />
      <PageHeader>
        Page header
      </PageHeader>
      <PageWrapper>
      </PageWrapper>
    </div>
    `
}));
