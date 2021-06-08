<template>
    <v-container >
        <v-card class="pa-10">

            <v-card-text>
                <v-row>

                    <v-col>
                        <h1>{{ user.name }}</h1>
                    </v-col>
                    <v-col> 
                        <ProfilePhoto></ProfilePhoto>
                    </v-col>

                </v-row>
            </v-card-text>

        </v-card>
    </v-container>
</template>

<script>
import ProfilePhoto from './ProfilePhoto'

export default {
    components: {
        ProfilePhoto
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