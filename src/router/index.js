import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Catalog from '@/views/Catalog.vue'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import Secure from '@/views/Secure.vue'
import { store } from '@/store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/secure',
        name: 'Secure',
        component: Secure,
        meta: {
            requiredAuth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// Обработка случаев несанкционированного доступа
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        if (store.getters.isLoggedIn) {
            return next()
        }
        return next('/login')
    } else {
        next()
    }
})

export default router