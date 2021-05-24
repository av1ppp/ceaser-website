import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        navside: {
            mini: false
        }
    },

    mutations: {
        increment(state) {
            state.count++
        },
        switchNavside(state, value) {
            state.navside.mini = value
        }
    }
})