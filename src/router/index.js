import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Music from '../views/Music.vue'
import NowPlaying from '../views/NowPlaying.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playing',
    name: 'NowPlaying',
    component: NowPlaying
  },
  {
    path:'/list',
    name: 'List',
    component: List
  },
  {
    path:'/music',
    name:'Music',
    component:Music
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
