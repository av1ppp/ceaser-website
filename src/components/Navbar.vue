<template>
  <v-app-bar
    dark
    app
    clipped-left
    height="57px"
  >
    <v-app-bar-nav-icon
      @click="toggleNavside"
      class="mr-5"
    >
    </v-app-bar-nav-icon>

    <v-img
      max-width="40px"
      src="../assets/logo.png"
    ></v-img>

    <v-spacer></v-spacer>

    <v-menu
      bottom
      left
      v-if="isLoggedIn"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mr-3"
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </template>

      <v-list
        color="pink accent-4"
        dense
      >
        <v-list-item
          class="dropdown-item"
          to="/my/account"
        >
          <v-list-item-icon>
            <v-icon>
              mdi-card-account-details-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Мой профиль</v-list-item-title>
        </v-list-item>

        <v-list-item
          class="dropdown-item"
          to="/my/videos"
        >
          <v-list-item-icon>
            <v-icon>mdi-video-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Мои видео</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          class="dropdown-item"
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template
      v-else
    >
      <router-link to="/login">
        <v-btn text rounded style="margin-right: 15px">Вход</v-btn>
      </router-link>

      <router-link to="/registration">
        <v-btn rounded color="pink darken-3">Регистрация</v-btn>
      </router-link>
    </template>

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

<style>
.dropdown-item {
  cursor: pointer;
}
</style>
