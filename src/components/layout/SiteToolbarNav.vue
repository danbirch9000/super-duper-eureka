<template>
  <ul class="toolbar-nav">
    <li>
      <DropdownMenu class="go-to-menu" :items="items">
        <template v-slot:menu-button="{ on }">
          <BaseButton size="sm" v-on="on">
            Go to section
            <BaseIcon variant="chevron-down" />
          </BaseButton>
        </template>
      </DropdownMenu>
    </li>
    <li>
      <BaseButton size="sm"><BaseIcon variant="log-out" /> Logout</BaseButton>
    </li>
  </ul>
</template>

<script>
import DropdownMenu from "@/components/nav/DropdownMenu";
import BaseIcon from "@/components/BaseIcon";
import BaseButton from "@/components/BaseButton";
export default {
  name: "SiteToolbarNav",
  components: {
    DropdownMenu,
    BaseIcon,
    BaseButton
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          action: () => console.log("Go to home")
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
