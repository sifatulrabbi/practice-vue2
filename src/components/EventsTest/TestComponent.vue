<template>
  <button @click="handleBtnClick" class="btn">Increase Count</button>
</template>

<script>
export default {
  name: "TestComponent",

  methods: {
    handleBtnClick() {
      this.$emit("testEvent");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
}
</style>
