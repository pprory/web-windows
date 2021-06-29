<template>
    <transition name="fade-animation">
        <ul v-show="showContentMenu" class="web-windows-content-menu" ref="contentMenuDom">
            <li
                v-for="(item, index) in menuList"
                :key="index"
                :class="item.subline ? 'subline' : void 0"
            >
                <img v-show="item.icon.length !== 0" :src="item.icon" :alt="item.title" />
                <span
                    :style="{ marginLeft: item.icon.length === 0 ? '18px' : void 0 }"
                >{{ item.title }}</span>
            </li>
        </ul>
    </transition>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"

interface ImenuList {
    icon: string,
    title: string,
    subline?: boolean,
    index: number,
}
export default defineComponent({
    name: 'baseContentMenu',
    props: {
        menuList: {
            default: [],
            type: Array as PropType<ImenuList[]>
        }
    },
    setup() {
        const contentMenuDom = ref()
        const showContentMenu = ref(false)
        function setLocation(ev: MouseEvent, show: boolean) {
            if (show) {
                contentMenuDom.value.style.cssText = `
                    left: ${ev.clientX}px;
                    top: ${ev.clientY}px;
                `
            }
            showContentMenu.value = show
        }

        return {
            contentMenuDom,
            setLocation,
            showContentMenu,
        }
    }
})
</script>

<style lang="scss" scoped>
.web-windows-content-menu {
    @include wh(240px, auto);
    background-color: #eeeeee;
    border: 1px solid #a0a0a0;
    box-shadow: 1px 1px 2px rgb(31, 31, 31);
    position: fixed;
    z-index: 1;
    margin: 0;
    padding: 4px 0px;
    font-size: 12px;
    li {
        padding: 0px 10px;
        line-height: 1.9em;
        list-style: none;
        user-select: none;
        &:hover {
            background-color: #ffffff;
        }
    }
    .subline {
        position: relative;
        padding-bottom: 5px;
        margin-bottom: 5px;
        &::after {
            content: " ";
            position: absolute;
            width: 90%;
            bottom: 0;
            left: 5%;
            display: inline-block;
            border-bottom: 1px solid #919191;
        }
    }
}
</style>