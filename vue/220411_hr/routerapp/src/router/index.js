import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LinkView from '../views/LinkView.vue'
import MenuView from '../views/MenuView.vue'
import UserView from '../views/UserView.vue'
import NotFound from '../views/NotFound.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/a',
    redirect: '/link'
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/link',
    name: 'LinkView',
    component: LinkView
  },
  {
    path: '/menu',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/user/:userId',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
