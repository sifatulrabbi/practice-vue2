<script>
import HelloWorld from "@/components/HelloWorld.vue"

export default {
    name: "App",
    components: {
        HelloWorld,
    },

    data: () => {
        return {
            message: "Welcome to Vue.js app",
        }
    },
}
</script>

<template>
    <div id="app">
        <HelloWorld :msg="message" />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
