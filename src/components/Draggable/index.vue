<template>
  <div
    @drop.prevent="handleDrop"
    @dragenter.prevent
    @dragover.prevent
    class="container"
  >
    <DraggableCard
      v-for="item of list"
      v-bind:key="item.title"
      :data="item"
      @droppedFile="handleUpdateFolder"
    />
  </div>
</template>

<script>
import DraggableCard from "./DraggableCard.vue";
import { mockList } from "@/assets/mockData";

export default {
  name: "DraggableContainer",

  components: {
    DraggableCard,
  },

  data() {
    return {
      list: [],
    };
  },

  beforeMount() {
    this.list = mockList;
  },

  methods: {
    handleDrop(e) {
      e.stopPropagation();
      const data = JSON.parse(e.dataTransfer.getData("file") || "{}");
      this.list = [
        ...this.list.filter((item) => item.title !== data.title),
        data,
      ];
    },

    handleUpdateFolder(target, data) {
      if (data.type === "folder") return;
      const dropzone = this.list.find((item) => item.title === target);
      if (!dropzone || dropzone.type !== "folder") return;

      dropzone.files = dropzone.files.filter(
        (item) => item.title !== data.title,
      );
      dropzone.files.push(data);

      this.list = this.list.filter((item) => item.title !== data.title);
      this.list.forEach((item) => {
        if (item.title === target || item.type === "file") return;
        item.files = item.files.filter((file) => file.title !== data.title);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 100vw;
  min-height: 90vh;
  background-color: #eee;
  display: flex;
  justify-items: start;
  align-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}
</style>
