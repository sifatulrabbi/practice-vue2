<template>
  <div class="container">
    <h3>Testing events passing</h3>
    <p>
      <strong>Count:</strong>
      <span>{{ count }}</span>
    </p>
    <TestComponent @testEvent="increaseCount('Hello')" />
  </div>
</template>

<script>
import TestComponent from "./TestComponent.vue";

export default {
  name: "EventsTestContainer",

  components: {
    TestComponent,
  },

  data() {
    return {
      count: 0,
    };
  },

  mounted() {
    this.$on("testEvent", this.increaseCount);
  },

  methods: {
    increaseCount(e) {
      console.log(e);
      this.count += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 100vw;
  padding: 1rem;

  h3 {
    font-size: 1.8rem;
  }

  p {
    display: inline-flex;
    gap: 0.5rem;
  }
}
</style>
