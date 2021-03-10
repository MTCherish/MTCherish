import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/users',
    name: 'Users',
   
    component: () => import( '../views/users/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
