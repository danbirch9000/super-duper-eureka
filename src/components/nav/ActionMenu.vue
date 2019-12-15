<template>
  <DropdownMenu class="go-to-menu" :items="items">
    <template v-slot:menu-button="{ on }">
      <VButton theme="secondary" :size="size" v-on="on">
        <VIcon variant="ellipsis" :size="size" />
        {{ text }}
      </VButton>
    </template>
    <VCard theme="primary" size="sm">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="nav-item"
        :disabled="item.disabled"
      >
        <VIcon v-if="item.icon" :variant="item.icon" class="sub-icon" />
        {{ item.text }}
      </button>
    </VCard>
  </DropdownMenu>
</template>

<script>
import DropdownMenu from "@/components/nav/DropdownMenu";
import VIcon from "@/components/VIcon";
import VButton from "@/components/VButton";
import VCard from "@/components/VCard";
export default {
  name: "ActionMenu",
  components: {
    DropdownMenu,
    VIcon,
    VButton,
    VCard
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md"
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-icon {
  color: $color-theme-secondary;
}
.nav-item {
  border-bottom: 1px solid $color-theme-secondary;
  font-size: $font-size-sm;
  color: white;
  display: block;
  @include button-no-style();
  padding: space(2) space(2);
}
button {
  display: block;
  width: 100%;
  text-align: left;
  &:disabled {
    cursor: not-allowed;
    background: $color-mono-8;
  }
}
</style>
