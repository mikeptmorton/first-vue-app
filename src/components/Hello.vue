<template>
  <div class="hello">
    <div class="md-layout">
      <md-card class="md-layout-item mx-2">
        <md-card-header>
          <div class="md-title">{{count}}</div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary" v-on:click="increment">Increment</md-button>
        </md-card-actions>
      </md-card>

      <md-card class="md-layout-item mx-2">
        <md-card-header>
          <div class="md-title">{{count}}</div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary" v-on:click="increment">Increment</md-button>
        </md-card-actions>
      </md-card>

      <md-card class="md-layout-item mx-2">
        <md-card-header>
          <div class="md-title">{{count}}</div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary" v-on:click="increment">Increment</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'hello',
    data() {
      return {
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
          amount: 1,
        });
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
