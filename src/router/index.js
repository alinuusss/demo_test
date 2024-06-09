import { createRouter, createWebHistory } from 'vue-router'
import ProductList from "@/views/products/ProductList.vue";
import Profile from "@/views/profile/Profile.vue";
import Setting from "@/views/setting/Setting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})

export default router
