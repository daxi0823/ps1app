import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GameView from '../views/GameView.vue'
import GamesView from '../views/GamesView.vue'
import SearchView from '../views/SearchView.vue'
import NotFound from '../views/NotFound.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/game',
    name: 'gameview',
    component: GameView
  },
  {
    path: '/games/:gamesId',
    name: 'GameDetail',
    component: GamesView
  },
  {
    path: '/search',
    name: 'searchview',
    component: SearchView
  },
  // 404 notfound page 下記二つまとめて
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
