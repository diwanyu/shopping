import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'

import store from '@/store'

const Login = () => import('@/views/login')
const Layout = () => import('@/views/layout')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const Prodetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const Myorder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: Myorder }
  ]
})

// 用数组保存需要登录授权的页面
const authUrl = ['/pay', '/myorder']

// 前置路由守卫
router.beforeEach((to, form, next) => {
  // 如果不是敏感页面直接放行
  if (!authUrl.includes(to.path)) {
    next()
    return
  }

  const token = store.getters.token
  // 如果是敏感页面，先判断是否登录
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
