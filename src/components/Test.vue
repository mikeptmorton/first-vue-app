<template>
  <div>
    <h2>State Count in Test: {{ count }}</h2>
    <md-button class="md-raised md-primary" v-on:click="decrement">Decrement</md-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        msg: 'Test Component',
      };
    },
    computed: {
      ...mapState([
        // map this.count to store.state.count
        'count',
      ]),
    },
    methods: {
      decrement() {
        this.$store.commit('decrement', {
          amount: 2,
        });
      },
    },
  };
</script>