import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/views/Home'
import Pokedex from '@/views/Pokedex'
import ErrorView from '@/views/ErrorView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/pokedex',
        name: 'Pokedex',
        meta: {
          includeFooter: true
        },
        beforeEnter: (to, from, next) => {
          if (from.name) {
            next()
          } else {
            next({ name: 'Home' })
          }
        },
        component: Pokedex
      },
      {
        path: '/error',
        name: 'ErrorView',
        beforeEnter: (to, from, next) => {
          if (from.name) {
            next()
          } else {
            next({ name: 'Home' })
          }
        },
        component: ErrorView
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
