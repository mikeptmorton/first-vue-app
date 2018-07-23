<template>
  <div id="app">
    <header>
      <span class="routing-link" v-on:click="goToHome">Home</span>
      <span class="routing-link" v-on:click="goToHello">Hello</span>
      <span class="routing-link" v-on:click="goToAbout">About</span>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goToHello() {
      this.$router.push('Hello');
    },
    goToHome() {
      this.$router.push('Home');
    },
    goToAbout() {
      this.$router.push('About');
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.routing-link {
  cursor: pointer;
  display: inline;
  line-height: 56px;
  margin-right: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
