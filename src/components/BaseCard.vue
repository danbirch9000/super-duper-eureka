<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style lang="scss" scoped>
.card {
  @include skin-card;
  padding: space(4);
}
</style>
