import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import cart from '@/views/cart'
import magazine from '@/views/magazine'
import cate from '@/views/cate'
import my from '@/views/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/magazine',
      name: 'magazine',
      component: magazine
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
