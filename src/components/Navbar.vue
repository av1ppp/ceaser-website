<template>
  <v-app-bar
    dark
    app
    height="65px"
  >
    <v-app-bar-nav-icon
      @click="toggleNavside"
    >
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data: function() {
    return {}
  },

  methods: {
    toggleNavside: function() {
      this.$store.commit('switchNavside', !this.$store.state.navside.mini)
    }
  }
}
</script>
