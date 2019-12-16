<template>
  <div class="off-canvas-nav">
    <VButton block theme="secondary-outline">Cancel</VButton>
    <VButton block theme="secondary">Confirm</VButton>
  </div>
</template>

<script>
import { VButton } from "@/components/VButton";
export default {
  components: {
    VButton
  }
};
</script>

<style lang="scss" scoped>
.off-canvas-nav {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
}
</style>
