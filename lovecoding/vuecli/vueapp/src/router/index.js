import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'childone',
        name:'ChildOne',
        component: () => import('../views/Child1.vue')
      },
      {
        path:'childtwo',
        name:'ChildTwo',
        component: () => import('../views/Child2.vue')
      }
    ]
  },
  {
    path:'/pageone',
    name:'PageOne',
    component :() =>import ('../views/Page1.vue'),
    beforeEnter:(to,from ,next) =>{
      next();
    }
  },
  {
    path:'/pagetwo',
    name:'PageTwo',
    alias:'/pt',
    component :() =>import ('../views/Page2.vue')
  },
  {
    path:'/pagethree/:username',
    name:'PageThree',
    component :() =>import ('../views/Page3.vue')
  },{
    path:'/redir/:username',
    redirect:"/pagethree/:username"
  },{
    path:"/pagefour",
    name:"PageFour",
    component: () => import('../views/Page4.vue')
  },
  {
    path:"/pagefive",
    name:"PageFive",
    component: () => import('../views/Page5.vue')
  },
  {
    path:"/tvdetail/:id",
    name:"Detail",
    component: () => import('../views/tvdetail.vue')
  },{
    path:'*',
    component: () => import('../views/Error.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
