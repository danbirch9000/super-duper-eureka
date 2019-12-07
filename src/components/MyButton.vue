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
button {
  border: 2px solid red;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
