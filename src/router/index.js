import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import BarCodeReader from '@/components/BarCodeReader';
import Home from '@/views/Home';
import About from '@/views/About';
// import NotFound from '@/views/404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/barcodereader',
      name: 'Bar Code Reader',
      component: BarCodeReader,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/hello',
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
