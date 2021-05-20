import { Locale } from "~/locale";
export function useTranslate(i18n?: Record<string, any>) {
    if (i18n) {
        Object.keys(i18n).map(key => {
            Locale.addMessages(key, i18n[key])
        })
    }
    return function (text: string) {
        return Locale.translate(text) || text
    }
}