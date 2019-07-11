/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Routes
import paths from './paths'
import { getToken, canTurnTo } from '@/libs/util'
import store from '@/store'
function route (path, view, name, meta) {
  return {
    name: name || view,
    path,
    meta,
    component: (resovle) => import(
      `@/views/${view}.vue`
    ).then(resovle)
  }
}

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes: paths.map(path => route(path.path, path.view, path.name, path.meta)).concat([
    { path: '*', redirect: '/dashboard' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
const LOGIN_PAGE_NAME = 'login'
const REGISTRY_PAGE_NAME = 'registry'
const FINDPASS = 'findPass'
const HOME = 'dashboard'
const turnTo = (to, roles, next) => {
  if (canTurnTo(to, roles)) {
    next()
  } else {
    alert('需要以下权限中的一个：' + to.meta.access.join(','))
  }
}
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.name === REGISTRY_PAGE_NAME) {
    next()
  } else if (to.name === FINDPASS) { // 找密码
    next()
  } else if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: HOME // 跳转到homeName页
    })
  } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.roles, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.roles, next)
      })
    }
  }
})
router.afterEach(to => {
  window.scrollTo(0, 0)
})
Vue.use(Meta)

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    id: process.env.GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
