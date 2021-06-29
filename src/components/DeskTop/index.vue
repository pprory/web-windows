<template>
    <div class="web-windows-deskTop" @contextmenu="showMenu" @mousedown.self="handleTapDeskTop">
        <teleport to="#app">
            <base-content-menu ref="contentMenu" :menu-list="menuList" />
        </teleport>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import BaseContentMenu from "../BaseContentMenu/index.vue"
export default defineComponent({
    components: {
        BaseContentMenu
    },
    setup() {
        const contentMenu = ref()
        const menuList = reactive([
            {
                icon: "",
                title: '查看(V)',
                index: 0,
            },
            {
                icon: "",
                title: '排序方式(O)',
                index: 1,
            },
            {
                icon: "",
                title: '刷新(E)',
                index: 2,
            },
            {
                icon: '',
                title: '新建',
                index: 3,
                subline: true,
            }, {
                icon: '',
                index: 4,
                title: '个性化'
            }
        ])

        function showMenu(ev: MouseEvent) {
            contentMenu.value.setLocation(null, false)
            setTimeout(() => {
                contentMenu.value.setLocation(ev, true)
            }, 100)
        }

        function handleTapDeskTop(ev: MouseEvent) {
            contentMenu.value.setLocation(null, false)
            const target = (ev.target as HTMLElement)
            const activeBox = document.createElement('div')
            activeBox.classList.add('active-box');
            target.appendChild(activeBox);

            const startX = ev.clientX
            const startY = ev.clientY
            activeBox.style.cssText = `
                left:${startX}px;
                top:${startY}px;
                width: 0px;
                height: 0px;
            `
            function xKey(x1: number, x2: number) {
                if (x1 < x2) {
                    return 'left'
                } else {
                    return 'right'
                }
            }
            function yKey(y1: number, y2: number) {
                if (y1 < y2) {
                    return 'top'
                } else {
                    return 'bottom'
                }
            }
            target.onmousemove = (_ev: MouseEvent) => {

                activeBox.style.cssText = `
                    ${xKey(startX, _ev.clientX)}: ${startX}px;
                    ${yKey(startY, _ev.clientY)}: ${startY}px;
                    width: ${Math.abs(_ev.clientX - startX)}px;
                    height: ${Math.abs(_ev.clientY - startY)}px;
                `
            }
            target.onmouseup = () => {
                target.onmousemove = null
                activeBox.remove()
            }
        }
        return {
            showMenu,
            menuList,
            location,
            contentMenu,
            handleTapDeskTop,
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
    // background-color: white;
    background-size: cover;
}
</style>
<style lang="scss">
.active-box {
    position: fixed;
    border: 2px solid #0078d7;
    background-color: rgba($color: #0078d7, $alpha: 0.5);
}
</style>