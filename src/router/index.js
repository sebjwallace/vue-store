import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProductPage from '@/components/pages/ProductPage'
import CartPage from '@/components/pages/CartPage'
import CategoryPage from '@/components/pages/CategoryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:productId',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/category/:categoryId',
      name: 'CategoryPage',
      component: CategoryPage
    }
  ]
})
