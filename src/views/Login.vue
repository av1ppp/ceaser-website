<template>
    <v-card
        class="mx-auto my-14"
        elevation="2"
        width="75%"
        :loading="loading"
        v-on:keyup.enter="login"
    >
        <v-card-title>Авторизация пользователя</v-card-title>

        <v-form
            ref="form"
            v-model="valid"
        >

            <v-card-text>
                <v-text-field
                    v-model="email"
                    :rules="rules.email"
                    label="Почта"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :rules="[v => !!v || 'Обязательное поле']"
                    label="Пароль"
                    required
                    type="password"
                ></v-text-field>

                <v-alert
                    :value="alertError.show"
                    type="error"
                    transition="scale-transition"
                >
                    {{ alertError.message }}
                </v-alert>
            </v-card-text>   

            <v-card-actions>
                <v-col class="text-right">
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        @click="login"
                    >
                        Логин
                    </v-btn>
                </v-col>
            </v-card-actions> 
        </v-form>    
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            alertError: {
                show: false,
                message: ''
            },
            email: '',
            password: '',
            valid: false,
            rules: {
                email: [
                    v => !!v || 'Обязательно поле',
                    v => /.+@.+\..+/.test(v) || 'Необходимо указать корректную почту',
                ]
            }
        }
    },

    methods: {
        showAlertError(message, timeout) {
            this.alertError.message = message
            this.alertError.show = true
            setTimeout(() => {
                this.alertError.show = false
            }, timeout)
        },

        login() {
            if (this.valid) {
                const data = {
                    email: this.email,
                    password: this.password
                }
                this.loading = true
                this.$store.dispatch('login', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => {
                        console.error(err)
                        this.showAlertError(err, 3500)
                    })
                    .finally(() => this.loading = false)
            }
        }
    }
}
</script>