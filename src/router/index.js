import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Calendar from '@/components/Calendar'
import Notice from '@/components/Notice'
import Review from '@/components/Review'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
