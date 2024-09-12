import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import RecipeDetail from '../views/RecipeDetail.vue';
import Favorites from '../views/Favorites.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipe/:id',
      name: 'RecipeDetail',
      component: RecipeDetail
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
});
