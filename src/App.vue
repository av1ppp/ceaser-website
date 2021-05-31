<template>
  <v-app>
    <Navbar />
    <Navside />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navside from '@/components/Navside'

export default {
  name: 'App',

  components: {
    Navbar,
    Navside
  },

  data: function () {
    return {}
  },

  created () {
    // Обработка просроченных токенов
    this.$http.interceptors.response.use(undefined, async err => {
      console.log(err)
      if (err.status === 401 && err.config && err.config.__isRetryRequest) {
        this.$store.dispatch('logout')
      }
      throw err
    })
  }
}
</script>
