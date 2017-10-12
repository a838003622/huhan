import Vue from 'vue'
import Router from 'vue-router'
import playOne from '@/components/playOne'
import playTwo from '@/components/playTwo'
import playThr from '@/components/playThr'
import playForee from '@/components/playForee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'playOne',
      component: playOne
    },
    {
      path: '/two',
      name: 'playTwo',
      component: playTwo
    },
    {
      path: '/three',
      name: 'playThr',
      component: playThr
    },
    {
      path: '/Foree',
      name: 'playForee',
      component: playForee
    },
  ]
})
