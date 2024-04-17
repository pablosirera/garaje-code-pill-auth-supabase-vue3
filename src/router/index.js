import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/auth-link',
      name: 'AuthLink',
      component: () => import('../pages/AuthLinkPage.vue')
    },
    {
      path: '/auth-email',
      name: 'AuthEmail',
      component: () => import('../pages/AuthEmailPage.vue')
    }
  ]
})

export default router
