
<template>
    <DeskTop />
    <TaskBar />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { TaskBar, DeskTop } from "~/components"
import { useTranslate } from "~/utils/useTranslate"
import { Locale } from "~/locale"
// import { useRouter } from "vue-router"

const i18n = {
    "zh-CN": {
        height: "身高",
    },
    "en-US": {
        height: "height",
    },
}
export default defineComponent({
    components: {
        TaskBar,
        DeskTop,
    },
    name: "App",
    setup() {
        const t = useTranslate(i18n)
        function switchLanguage(locale: string) {
            Locale.setLocale(locale)
        }

        // 禁用默认右键上下文
        onMounted(() => {
            document.oncontextmenu = function () {
                return false
            }
        })
        return {
            t,
            switchLanguage,
        }
    },
})
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.web-windows {
    @include wh(100vw, 100vh);
    position: relative;
    overflow: auto;
}
</style>