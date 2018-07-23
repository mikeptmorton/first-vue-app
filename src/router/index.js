import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import Home from '@/views/Home';
import About from '@/views/About';
import NotFound from '@/views/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
