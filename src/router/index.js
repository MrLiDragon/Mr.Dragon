import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import home from '@/components/home/home'
import findmusic from '@/components/home/findmusic'
import fm from '@/components/home/fm'
import mv from '@/components/home/mv'
import friend from '@/components/home/friend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name:'home',
      component:home,
      redirect:'findmusic',
      children:[
        {
          path:'/findmusic',
          name:'findmusic',
          component:findmusic
        },
        {
          path:'/fm',
          name:'fm',
          component:fm
        },
        {
          path:'/mv',
          name:'mv',
          component:mv
        },
        {
          path:'/friend',
          name:'friend',
          component:friend
        }
      ]
    }
  ]
})
