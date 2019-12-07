<template>
  <nuxt-link v-if="type === 'nuxt'" :to="to">
    <slot />
  </nuxt-link>
  <router-link v-else-if="type === 'router'" :to="to">
    <slot />
  </router-link>
  <a v-else :href="to">
    <slot />
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    type() {
      return this.$router ? (this.$nuxt ? "nuxt" : "router") : "link";
    }
  }
};
</script>

<style></style>
