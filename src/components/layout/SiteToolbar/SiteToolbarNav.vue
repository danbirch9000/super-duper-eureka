<template>
  <ul class="toolbar-nav">
    <li>
      <DropdownMenu class="go-to-menu" :items="items">
        <template v-slot:menu-button="{ on }">
          <VButton size="sm" theme="blank" v-on="on">
            Go to section
            <VIcon variant="chevron-down" size="sm" />
          </VButton>
        </template>
      </DropdownMenu>
    </li>
    <li>
      <VButton size="sm" theme="blank">
        <VIcon variant="log-out" size="sm" /> Logout
      </VButton>
    </li>
  </ul>
</template>

<script>
import { DropdownMenu } from "@/components/nav/DropdownMenu";
import { VIcon } from "@/components/VIcon";
import { VButton } from "@/components/VButton";
export default {
  name: "SiteToolbarNav",
  components: {
    DropdownMenu,
    VIcon,
    VButton
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          action: () => alert("Go to home")
        },
        {
          text: "Client DB"
        },
        {
          text: "FMS"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.toolbar-nav {
  @include list-no-style();
  display: flex;
  align-items: stretch;
  height: 100%;
  color: white;
}
li {
  margin: 0 space(2);
  display: flex;
  height: 100%;
}
button {
  background: none;
  border: none;
  color: white;
}
.go-to-menu {
  button {
    background: $color-brand-blue;
  }
}
</style>
