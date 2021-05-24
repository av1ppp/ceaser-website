import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vuex from 'vuex'
import { store } from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {
    // options here
})

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')