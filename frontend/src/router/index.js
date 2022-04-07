import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllProducts from '../views/AllProducts.vue'
import ProductDetails from '../views/ProductDetails.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: AllProducts
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

const app = Vue.createApp({})

app.use(router)
app.mount('#app')

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })


export default router