import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navside: {
            mini: false
        }
    },

    getters: {},

    mutations: {
        switchNavside(state, value) {
            state.navside.mini = value
        }
    },

    actions: {},

    modules: {
        account
    }
})