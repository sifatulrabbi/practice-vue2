<template>
  <div
    draggable="true"
    @dragstart="handleDrag"
    @drop.prevent="handleDrop"
    @dragenter.prevent
    @dragover.prevent
    class="draggableCard"
  >
    <h4>{{ data.title }}</h4>
    <p>{{ data.body }}</p>
    <span>{{ data.type }}</span>
    <div v-if="data.files && data.files.length > 0">
      <div
        draggable="true"
        v-for="file of data.files"
        v-bind:key="file.title"
        @dragstart="(e) => handleChildDrag(e, file)"
        style="padding: 0.3rem"
      >
        <strong>{{ file.title }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DraggableCard",

  props: ["data"],

  data() {
    return {};
  },

  methods: {
    handleDrop(e) {
      e.stopPropagation();
      const data = JSON.parse(e.dataTransfer.getData("file") || "{}");
      if (this.data.type === "file") return;
      this.$emit("droppedFile", this.data.title, data);
    },

    handleDrag(e) {
      e.stopPropagation();
      e.dataTransfer.setData("file", JSON.stringify(this.data));
    },

    handleChildDrag(e, data) {
      e.stopPropagation();
      e.dataTransfer.setData("file", JSON.stringify(data));
    },
  },
};
</script>

<style scoped lang="scss">
.draggableCard {
  padding: 1rem;
  text-align: left;
  background: rgb(179, 214, 255);
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  max-height: max-content;
  max-width: 300px;
  cursor: grab;
}
</style>
