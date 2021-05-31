import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        navside: {
            mini: false
        },
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    },

    mutations: {
        switchNavside(state, value) {
            state.navside.mini = value
        },

        authRequest(state) {
            state.status = 'loading'
        },

        authSuccess(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },

        authError(state) {
            state.status = 'error'
        },

        logout(state) {
            state.status = ''
            state.token = ''
        }
    },

    actions: {
        async login({ commit }, _user) {
            commit('authRequest')

            try {
                const response = await axios({
                    url: 'http://localhost:5555/login',
                    data: _user,
                    method: 'POST'
                })

                if (response.data.auth) {
                    const token = response.data.token
                    const user = response.data.user

                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token

                    commit('authSuccess', token, user)
                    return response
                }

                commit('authError')
                localStorage.removeItem('token')
                throw response.data.message

            } catch (err) {
                commit('authError')
                localStorage.removeItem('token')
                throw err
            }
        },

        async registration({ commit }, _user) {
            commit('authRequest')

            try {
                const response = await axios({
                    url: 'http://localhost:5555/registration',
                    data: _user,
                    method: 'POST'
                })

                if (response.data.auth) {
                    const token = response.data.token
                    const user = response.data.user

                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token

                    commit('authSuccess', token, user)
                    return response
                }

                commit('authError')
                localStorage.removeItem('token')
                throw response.data.message

            } catch (err) {
                commit('authError')
                localStorage.removeItem('token')
                throw err
            }
        },

        async logout({ commit }) {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        }
    }
})