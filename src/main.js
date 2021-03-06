import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token)
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')