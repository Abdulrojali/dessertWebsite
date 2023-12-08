import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('../view/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../view/about.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/login.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../view/contact.vue')
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: () => import('../view/createAccount.vue')
    },
  ]
})

export default router
