import axios from 'axios'

export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },

    actions: {
        async updateUser({ commit }) {
            const response = await axios({
                url: 'http://localhost:5555/info',
            })

            if (response.data.auth) {

                commit('updateUser', response.data.user)
                return response

            } else {
                throw response.data.message
            }
        },

        async updateAvatar({ commit }, file) {
            const formData = new FormData()
            formData.append('avatar', file)

            const response = await axios.post(
                'http://localhost:5555/avatar',
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            if (response.data.done) {

                console.log(commit)

                return response

            } else {
                throw response.data.message
            }
        },

        async login({ commit }, _user) {
            commit('authRequest')

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

                commit('authSuccess', { token, user })
                return response
            }

            commit('authError')
            localStorage.removeItem('token')
            throw response.data.message
        },

        async registration({ commit }, _user) {
            commit('authRequest')

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

                commit('authSuccess', { token, user })
                return response
            }

            commit('authError')
            localStorage.removeItem('token')
            throw response.data.message
        },

        async logout({ commit }) {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        }
    },

    mutations: {
        updateUser(state, user) {
            state.user = user
        },

        authRequest(state) {
            state.status = 'loading'
        },

        authSuccess(state, payload) {
            state.status = 'success'
            state.token = payload.token
            state.user = payload.user
        },

        authError(state) {
            state.status = 'error'
        },

        logout(state) {
            state.status = ''
            state.token = ''
        }
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        user: state => state.user,
    }
}