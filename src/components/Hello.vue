<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <h2>State Count in Hello: {{ count }}</h2>

    <md-button class="md-raised md-primary" v-on:click="increment">Increment</md-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js PWA',
      };
    },
    computed: {
      ...mapState([
        // map this.count to store.state.count
        'count',
      ]),
    },
    methods: {
      increment() {
        this.$store.commit('increment', {
          amount: 5,
        });
        this.$store.dispatch('fetchFromDb');
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }
</style>
