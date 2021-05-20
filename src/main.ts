import { createApp } from 'vue'
import App from './App.vue'
import router from "~/route";

// Set the web-windows default language
import defaultMessages from "~/locale/lang/zh-CN";
import { Locale } from "~/locale";
Locale.addMessages('zh-CN', defaultMessages)

const app = createApp(App)
app.use(router)
app.mount('#app')
