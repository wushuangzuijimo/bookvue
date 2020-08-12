import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pagetwo from '../views/Pagetwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图书管理',
    component: () => import('../views/index'),
    redirect: 'pageone',
    show:true,
    children:[
      {
        path: '/pageone',
        name: '查询图书',
        component: () => import('../views/PageOne')
      },
      {
        path: '/pagetwo',
        name: '添加图书',
        component: pagetwo
      },
      {
        path: '/lunbo',
        name: '轮播',
        component:()=> import('../views/lunbo')
      }

    ]
  },
  {
    path: '/',
    name: '导航2',
    component: () => import('../views/index'),
    children:[
      {
        path: '/update',
        name: '修改页面',
        component: ()=> import('../views/Update'),
        show:false
      },

      {
        path: '/pagefour',
        name: '页面4',
        component: ()=> import('../views/PageFour')
      },


    ]
  },




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
