<template>
    <v-navigation-drawer
        floating
        app
        permanent
        :clipped="true"
        :mini-variant.sync="mini"
    >
        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :to="item.path"
                :key="item.title"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                to="/adminpanel"
                key="AdminPanel"
                v-if="isLoggedIn"
                link
            >
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Админ-панель</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    data: function() {
        return {
            items: [
                {
                    title: 'Каталог',
                    icon: 'mdi-home',
                    path: '/catalog'
                },
                {
                    title: 'О нас',
                    icon: 'mdi-information',
                    path: '/about'
                },
            ],
            right: null,
        }
    },

    computed: {
        mini: {
            get() {
                return this.$store.state.navside.mini
            },
            set(value) {
                this.$store.commit('switchNavside', value)
            }
        },

        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    }
}
</script>

<style>
</style>
