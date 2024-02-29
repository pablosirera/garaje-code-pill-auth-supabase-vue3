import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth-link',
      name: 'AuthLink',
      component: () => import('../views/AuthLinkView.vue')
    },
    {
      path: '/auth-email',
      name: 'AuthEmail',
      component: () => import('../views/AuthEmail/AuthEmailView.vue')
    }
  ]
})

export default router
