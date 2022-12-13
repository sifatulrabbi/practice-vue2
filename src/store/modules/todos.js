const db = [
    { id: 1, title: "Todo one" },
    { id: 2, title: "Todo two" },
    { id: 3, title: "Todo three" },
]

const state = {
    todos: [],
}

const getters = {
    allTodos: (state) => {
        return state.todos
    },
}

const actions = {
    fetchTodos: ({ commit }) => {
        commit("setTodos", db)
    },
    addTodo: ({ commit }, title) => {
        const todo = {
            id: db.length + 1,
            title: title,
        }
        commit("addTodo", todo)
    },
    removeTodo: ({ commit }, id) => {
        commit("removeTodo", id)
    },
}

const mutations = {
    setTodos: (state, todos) => {
        state.todos = todos
    },
    addTodo: (state, todo) => {
        db.unshift(todo)
        state.todos.unshift(todo)
    },
    removeTodo: (state, id) => {
        state.todos = state.todos.filter((todo) => todo.id !== id)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
