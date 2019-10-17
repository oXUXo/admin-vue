import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout.vue'
import dashboard from '../views/dashboard/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      }
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
