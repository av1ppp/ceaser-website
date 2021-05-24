<template>
  <div class="home">
    <h1>{{ count }}</h1>
    <vs-button
      @click="increment"
    >
      Incement
    </vs-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  computed: {
    count: function() {
      return this.$store.state.count
    }
  },

  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
