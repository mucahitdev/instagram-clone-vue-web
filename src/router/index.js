import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () => import('../views/direct/index')
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/explore/index')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile'),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () => import('../views/profile/posts')
      },
      {
        path: 'igtv',
        name: 'ProfileIgtv',
        component: () => import('../views/profile/igtv')
      },
      {
        path: 'saved',
        name: 'ProfileSaved',
        component: () => import('../views/profile/saved')
      },

      {
        path: 'tag',
        name: 'ProfileTag',
        component: () => import('../views/profile/tag')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
