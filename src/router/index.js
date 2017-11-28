import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Copas from '@/components/Copas'
	
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Copas',
      name: 'Copas',
      component: Copas
    }
      
  ]
})
