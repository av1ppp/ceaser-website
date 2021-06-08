<template>
    <v-hover v-slot="{ hover }">
        <v-avatar
            size="200"
            elevation="10"
        >
            <v-img src="@/assets/images/empty-photo.jpg"></v-img>
            <v-fade-transition>
                <div
                    v-if="hover"
                    @click="$refs.inputUpload.click()"
                    class="change-photo-block"
                >
                    <v-icon
                        color="grey lighten-4"
                        x-large
                    >
                        mdi-image
                    </v-icon>
                    <input
                        type="file"
                        ref="inputUpload"
                        accept="image/*"
                        size="10000000"
                        v-show="false"
                        @change="changePhoto"
                    >
                </div>
            </v-fade-transition>
        </v-avatar>
    </v-hover>
</template>

<script>
export default {
    methods: {
        changePhoto() {
            const file = this.$refs.inputUpload.files[0]
            console.log(file)
        }
    },
}
</script>

<style>
.change-photo-block {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .35);
    position: absolute;
}
</style>