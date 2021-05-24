import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },

    mutations: {
        increment(state) {
            state.count++
        }
    }
})