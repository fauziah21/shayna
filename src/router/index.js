import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Reset from '../views/Reset.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
]

const router = new VueRouter({
  routes
})

export default router
