import { createRouter, createWebHistory } from 'vue-router';
import MainMasterPage from '@/components/MainMasterPage.vue';
import HomeView from '@/views/HomeView.vue';
import OffersView from '@/views/OffersView.vue';
import SellView from '@/views/SellView.vue';
import ContactView from '@/views/ContactView.vue';
import ProductDetails from '@/views/ProductDetails'

const routes = [
  {
    path: '/',
    component: MainMasterPage,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: 'offers',
        name: 'OffersView',
        component: OffersView,
      },
      { path: '/offers/:id', 
        name: 'ProductDetails', 
        component: ProductDetails, 
        props: true },
      {
        path: 'sell',
        name: 'SellView',
        component: SellView,
      },
      {
        path: 'contact',
        name: 'ContactView',
        component: ContactView,
      } 
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
