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
  }
}
</script>
