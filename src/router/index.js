import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: {name: 'dashboard'},
    component: () => import('../views/layout.vue')
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/index.vue')
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
  },
  {
    path: '*',
    redirect: {name: 'dashboard'}
  }
]

// function createRoute(arr) {
//   for (let i=0; i < arr.length; i++) {
//     if (!arr[i].component) return

//     let componentFun = import(`../views/${arr[i].component}.vue`)
//     arr[i].component = () => componentFun
//     if (arr[i].children && arr[i].children.length > 0) {
//       createRoute(arr[i].children)
//     }
//   }
// }

const router = new VueRouter({
  routes
})

export default router
