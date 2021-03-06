import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TrombiPage from '../views/TrombiPage.vue';
import LatestMovie from '../components/LatestMovie.vue';
import SearchPage from '../views/SearchPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/trombi',
    name: 'trombi',
    component: TrombiPage,
  },
  {
    path: '/movie',
    name: 'movie',
    component: LatestMovie,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
