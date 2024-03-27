import Home from '@/components/Home.vue'
import Card from '@/components/Card.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/card',
      name: "card",
      component: Card
    }
  ]
})

export default router
