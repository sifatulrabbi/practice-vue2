<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
}
</script>

<template>
    <div class="hello">
        {{ msg }}
    </div>
</template>

<style scoped></style>
