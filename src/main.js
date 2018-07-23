// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { MdButton } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App';
import router from './router';
import State from './state/state';
import Test from './components/Test';
import Hello from './components/Hello';

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(State);
Vue.component('Test', Test);
Vue.component('Hello', Hello);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: State,
  template: '<App/>',
  components: { App },
});
