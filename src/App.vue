<template>
  <div id="app">
    <!-- <HelloWorld :msg="message" />
        <div class="todos">
            <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
        </div>
        <form @submit="onSubmit">
            <input
                v-model="form.title"
                type="text"
                placeholder="Todo title"
                required
            />
            <button type="submit">Add Todo</button>
        </form> -->
    <DraggableContainer />
    <EventsTestContainer />
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue"
// import TodoItem from "@/components/TodoItem.vue"
import DraggableContainer from "@/components/Draggable";
import EventsTestContainer from "@/components/EventsTest/EevntsTestContainer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // TodoItem,
    DraggableContainer,
    EventsTestContainer,
  },
  data: () => {
    return {
      message: "Welcome to Vue.js app",
      form: {
        title: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.form.title);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todos {
  margin-bottom: 4rem;
}
</style>
