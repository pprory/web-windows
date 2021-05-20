import defaultMessages from "./lang/zh-CN";
import { ref, reactive } from "vue";
import { assign } from "lodash";

type TMessages = Record<string, any>

const lang = ref("zh-CN")
const libraryText = reactive<Map<string, TMessages>>(new Map())
libraryText.set(lang.value, defaultMessages)

const Locale = {
    translate(key: string) {
        return (libraryText.get(lang.value) as TMessages)[key]
    },
    coverMessages(newLang: string, newMessages: TMessages) {
        libraryText.set(newLang, newMessages)
    },
    addMessages(newLang: string, newMessages: TMessages) {
        libraryText.set(newLang, assign(libraryText.get(newLang), newMessages))
    },
    setLocale(value: string) {
        lang.value = value
    }
}

export {
    Locale
}