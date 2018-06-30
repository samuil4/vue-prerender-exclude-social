import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import TestPage from '@/components/TestPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/test-page',
      name: 'TestPage',
      component: TestPage,
    },
  ],
});
