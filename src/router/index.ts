import { createRouter, createWebHistory } from 'vue-router'
import ISSView from '@/views/ISSView.vue'
import FleetView from '@/views/FleetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fleet',
      component: FleetView
    },
    {
      path: '/iss',
      name: 'iss_tracker',
      component: ISSView
    }
  ]
})

export default router
