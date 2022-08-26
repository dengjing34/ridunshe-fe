import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import WorksAll from '@/pages/worksAll'
import WorksDetail from '@/pages/worksDetail'
import News from '@/pages/news'
import NewsDetail from '@/pages/newsDetail'
import Contactus from '@/pages/contactus'
import Aboutus from '@/pages/about'

Vue.use(Router)

let router = new Router({
  mode: 'history', // hash history
  routes: [
    {
      path: '/works',
      name: 'works',
      meta: { title: 'Works' },
      component: WorksAll
    },
    {
      path: '/Works_detail',
      name: 'works',
      component: WorksDetail
    },
    {
      path: '/news',
      name: 'news',
      meta: { title: 'News' },
      component: News
    },
    {
      path: '/news_detail',
      name: 'news',
      component: NewsDetail
    },
    {
      path: '/contactus',
      name: 'contactus',
      meta: { title: 'Contactus' },
      component: Contactus
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      meta: { title: 'Aboutus' },
      component: Aboutus
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.meta.title) {
    document.title = '成都日敦社文化传播有限公司 - ' + to.meta.title
  } else {
    document.title = '成都日敦社文化传播有限公司'
  }
  if (to.name == 'home') {
    window.showLogoStage = true
  } else {
    window.showLogoStage = false
  }
  next()
})
export default router
