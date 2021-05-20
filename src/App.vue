<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { useRouter } from "vue-router"
export default defineComponent({
    name: "App",
    setup() {},
})
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font-size: 12px;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>