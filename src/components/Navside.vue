<template>
    <v-navigation-drawer
        floating
        app
        :mini-variant.sync="mini"
    >

    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                Application
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
        dense
        nav
    >
        <v-list-item
            v-for="item in items"
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
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
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
.title {
    height: 40px
}
</style>
