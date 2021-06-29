import { createStore } from "vuex";
import AppConfig from "./modules/app";

export interface IRootState {
}

const store = createStore<IRootState>({
    modules: {
        AppConfig,
    }
})

export default store
