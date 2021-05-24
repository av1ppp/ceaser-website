<template>
    <v-navigation-drawer
        floating
        app
        permanent
        :mini-variant.sync="mini"
    >

    <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-img src="../assets/logo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Ceaser</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

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
    </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: function() {
        return {
            items: [
                {
                    title: 'Catalog',
                    icon: 'mdi-home',
                    path: '/catalog'
                },
                {
                    title: 'About',
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
        }
    }
}
</script>

<style>
</style>
