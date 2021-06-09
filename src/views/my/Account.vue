<template>
    <v-container >
        <v-card class="pa-10">

            <v-card-text>
                <v-row>

                    <v-col>
                        <h1>{{ user.name }}</h1>
                    </v-col>
                    <v-col> 
                        <Avatar></Avatar>
                    </v-col>

                </v-row>
            </v-card-text>

        </v-card>
    </v-container>
</template>

<script>
import Avatar from './Avatar'

export default {
    components: {
        Avatar
    },

    data() {
        return {}
    },

    computed: {
        user() {
            return this.$store.getters.user
        }
    },

    beforeCreate() {
        this.$store.dispatch('updateUser')
            .catch(err => console.error(err))
    }
}
</script>