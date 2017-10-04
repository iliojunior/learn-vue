import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Todos from '@/pages/Todos'
import NewTodo from '@/pages/NewTodo'
import TodoLayout from '@/pages/TodoLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/todos',
      component: TodoLayout,
      children: [
        {
          path: '/',
          name: 'todos',
          component: Todos
        },
        {
          path: 'new',
          name: 'newTodo',
          component: NewTodo
        }
      ]
    }
  ]
})
