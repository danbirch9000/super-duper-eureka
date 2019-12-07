<template>
  <ul class="toolbar-nav">
    <li>
      <DropdownMenu class="go-to-menu">
        <template v-slot:menu-button="{ on }">
          <BaseButton size="sm" v-on="on">
            Go to section
            <BaseIcon type="chevron-down" />
          </BaseButton>
        </template>
        <BaseCard>
          <div role="list">
            <div class="list-item">
              <span class="p">BaseHeading of some kind</span>
              <span class="p-sm"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Labore provident, excepturi porro quasi recusandae ullam eaque
                iste dignissimos. Velit nisi iusto corporis illo similique
                dolores laboriosam praesentium, quae facilis ut?</span
              >
            </div>
          </div>
        </BaseCard>
      </DropdownMenu>
    </li>
    <li>
      <BaseButton size="sm"><BaseIcon type="log-out" /> Logout</BaseButton>
    </li>
  </ul>
</template>

<script>
import DropdownMenu from "@/components/nav/DropdownMenu";
import BaseCard from "@/components/BaseCard";
import BaseIcon from "@/components/BaseIcon";
import BaseButton from "@/components/BaseButton";
export default {
  name: "SiteToolbarNav",
  components: {
    DropdownMenu,
    BaseCard,
    BaseIcon,
    BaseButton
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
