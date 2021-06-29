<template>
    <div class="web-windows-taskbar" @contextmenu="onShowMenu($event, true)">
        <div class="web-windows-taskbar-left">
            <div
                class="web-windows-taskbar-left-windows-button base-button"
                :title="t('windowButtonTitle')"
            >
                <div class="web-windows-taskbar-left-windows-button-in">
                    <div class="windows-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="web-windows-taskbar-right" @click="backDeskTop">
            <div class="web-windows-taskbar-right-current-time base-button">
                <span>{{ cureentTime.time }}</span>
                <span>{{ cureentTime.date }}</span>
            </div>
            <div class="web-windows-taskbar-right-message base-button">
                <!-- TODO 替换图标 -->
                <div></div>
            </div>
            <div class="web-windows-taskbar-right-back-deskTop base-button"></div>
        </div>
        <!-- <teleport to="#app">
            <content-menu />
        </teleport> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useTranslate } from "~/utils/useTranslate"
import moment from "moment"
// import contentMenu from "./contentMenu.vue";
export default defineComponent({
    name: "taskbar",
    components: {
        // contentMenu,
    },
    setup() {
        const t = useTranslate()
        const showMenu = ref(false)
        const cureentTime = reactive({
            date: "",
            time: "",
        })

        function backDeskTop() {
            console.log("回到桌面")
        }

        // Update the time in the bottom right corner of the desktop
        function updateTime() {
            const [date, time] = moment().format("YYYY/MM/DD-HH:mm").split("-")
            cureentTime.date = date
            cureentTime.time = time
        }

        // show task bar menu
        function onShowMenu(ev: Event, bol: boolean) {
            console.log(ev)
            showMenu.value = bol
        }

        setInterval(() => {
            updateTime()
        }, 1000)
        updateTime()
        return {
            t,
            backDeskTop,
            cureentTime,
            onShowMenu,
        }
    },
})
</script>

<style lang="scss" scoped>
.web-windows-taskbar {
    @include wh(100%, 40px);
    position: absolute;
    bottom: 0px;
    background: $taskBarBackground;
    // backdrop-filter: blur(10px);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    &-left {
        width: auto;
        height: 100%;
        &-windows-button {
            @include wh(50px, 100%);
            background: $taskBarWindowsButtonBackground;
            &-in {
                transform-style: preserve-3d;
                perspective: 60px;
                @include wh(100%, 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                .windows-icon {
                    z-index: 3;
                    width: 38%;
                    height: 40%;
                    display: flex;
                    justify-content: space-between;
                    align-content: space-between;
                    flex-wrap: wrap;
                    transform: rotateY(-35deg);
                    > div {
                        background: white;
                        width: 48%;
                        height: 47.5%;
                    }
                }
            }
            &:hover {
                .windows-icon > div {
                    background: #429ce3;
                }
            }
            &:active {
                .windows-icon > div {
                    background: #0078d7;
                }
            }
        }
    }
    &-right {
        width: auto;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        &-back-deskTop {
            width: 5px;
            height: 100%;
            margin-left: 4px;
            border-left: 1px solid $borderColor;
        }
        &-message {
            margin: 0px 4px;
            min-width: 20px;
            padding: 0 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
                border-radius: 2px;
                width: 15px;
                height: 30%;
                border: 1px solid $iconColor;
            }
        }
        &-current-time {
            padding: 0 10px;
            color: $fontColor;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            user-select: none;
        }
    }
}
</style>