<template>
  <v-app-bar
    dark
    app
    height="57px"
  >
    <v-app-bar-nav-icon
      @click="toggleNavside"
    >
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn
      text
      v-if="isLoggedIn"
      @click="logout"
    >
    Выйти
    </v-btn>

    <div
      v-else
    >
      <router-link to="/login">
        <v-btn text rounded style="margin-right: 15px">Вход</v-btn>
      </router-link>

      <router-link to="/registration">
        <v-btn rounded color="pink darken-3">Регистрация</v-btn>
      </router-link>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  data: function() {
    return {}
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },

  methods: {
    toggleNavside() {
      this.$store.commit('switchNavside', !this.$store.state.navside.mini)
    },

    logout() {
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/login'))
    }
  }
}
</script>
