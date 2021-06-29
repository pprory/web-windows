import { Module } from "vuex"
import { IRootState } from "../index";
interface Istate {
    version: string
}

const Config: Module<Istate, IRootState> = {
    state: () => ({
        version: 'v0.01'
    }),
    mutations: {},
    getters: {
        v: (state) => state.version,
    }

}

export default Config