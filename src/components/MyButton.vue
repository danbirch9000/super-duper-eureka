<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
//
</style>
