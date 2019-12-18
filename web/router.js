import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ef0cc8b = () => interopDefault(import('..\\pages\\life.vue' /* webpackChunkName: "pages_life" */))
const _1f7d89ca = () => interopDefault(import('..\\pages\\study.vue' /* webpackChunkName: "pages_study" */))
const _51231354 = () => interopDefault(import('..\\pages\\time-machine.vue' /* webpackChunkName: "pages_time-machine" */))
const _7c48ecdc = () => interopDefault(import('..\\pages\\tools.vue' /* webpackChunkName: "pages_tools" */))
const _7fea7826 = () => interopDefault(import('..\\pages\\tools\\index.vue' /* webpackChunkName: "pages_tools_index" */))
const _7930c1b7 = () => interopDefault(import('..\\pages\\vision.vue' /* webpackChunkName: "pages_vision" */))
const _63e6f853 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'preactive',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/life",
    component: _5ef0cc8b,
    name: "life"
  }, {
    path: "/study",
    component: _1f7d89ca,
    name: "study"
  }, {
    path: "/time-machine",
    component: _51231354,
    name: "time-machine"
  }, {
    path: "/tools",
    component: _7c48ecdc,
    children: [{
      path: "",
      component: _7fea7826,
      name: "tools"
    }]
  }, {
    path: "/vision",
    component: _7930c1b7,
    name: "vision"
  }, {
    path: "/",
    component: _63e6f853,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
