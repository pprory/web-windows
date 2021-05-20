<template>
    <div class="web-windows-deskTop" @contextmenu="showMenu"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    setup() {
        function showMenu() {
            console.log(123)
        }
        return {
            showMenu,
        }
    },
})
</script>

<style lang="scss" scoped>
.web-windows-deskTop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    @include wh(100vw, 100vh);
    @include bg("../../assets/images/deskTopBackground.jpg");
    background-size: cover;
}
</style>