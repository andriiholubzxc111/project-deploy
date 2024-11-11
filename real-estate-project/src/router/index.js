import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OffersView from '@/views/OffersView.vue'
import SellView from '@/views/SellView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/offers',
    name: 'offers',
    component: OffersView
  },
  {
    path: '/offers/:id',
    name: 'product-details',
    component: ProductDetails,
    props: true
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
