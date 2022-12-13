<template>
    <div>
        <p>{{ todo.title }}</p>
        <button @click="removeById">Remove</button>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "TodoItem",
    props: {
        todo: Object,
    },
    methods: {
        ...mapActions(["removeTodo"]),
        removeById() {
            this.removeTodo(this.todo.id)
        },
    },
}
</script>

<style></style>
