import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Link from '../views/LinkView.vue'
// import後の名称はなんでもOKだが、下のroutesではその名称を用いる
import Login from '../views/LoginView.vue'
import Task from '../views/TaskView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // 
    component: HomeView
  },
  {
    path: '/link',
    name: 'link',
    // 
    component: Link
  },
  {
    path: '/login',
    name: 'login',
    // 
    component: Login
  },
  {
    path: '/task',
    name: 'task',
    // 
    component: Task
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
