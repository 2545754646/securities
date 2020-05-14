import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import My from  '@/page/details/my'
import Market from  '@/page/details/market'
import DoNew from  '@/page/details/doNew'
import Deal from  '@/page/details/deal'
import Consult from  '@/page/details/consult'
import Strategy from  '@/page/details/strategy'
import Message from  '@/page/details/message'
import Academy from '@/page/details/academy'
import Friends from  '@/page/details/friends'
import Quote from '@/page/details/pages/quote.vue'
import Analysis from '@/page/details/pages/analysis.vue'
import News from '@/page/details/pages/news.vue'
import Comment from '@/page/details/pages/comment.vue'
import LoginIndex from '@/page/details/login.vue'
import Signup from '@/page/details/signup.vue'
import PasswordNew from '@/page/details/passwordNew.vue'
import Offer from '@/page/details/offer.vue'
import Offer_all from '@/page/details/pages/offer_all.vue'
import Offer_HK from '@/page/details/pages/offer_hk.vue'
import Offer_meigu from '@/page/details/pages/offer_meigu.vue'
import Offer_hushen from '@/page/details/pages/offer_hushen.vue'
import DoNew_meigu from '@/page/details/pages/doNew_meigu.vue'
import DoNew_ganggu from '@/page/details/pages/DoNew_ganggu.vue'
Vue.use(Router)

const router = new Router({
// export default new Router({
  routes: [
//	{
//		path: '/login',
//		name: 'Login',
//		component: Login,
//		redirect: '/login'
//	},
		{
			path: '/',
			redirect: '/login'
		},
		{
      	path: '/login',
      	name: 'Login',
      	component: LoginIndex
    },
    {
      	path: '/signup',
      	name: 'Signup',
      	component: Signup
    },
    {
    	path: '/passwordNew',
    	name: 'PasswordNew',
    	component: PasswordNew
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      redirect: '/layout/my',
      children: [
        {
          path: 'my',
          name: 'My',
          component: My
//          redirect:'/my/quote',
//        children: [
//        	{
//        		path:'quote',
//        		name: 'Quote',
//        		component: Quote
//        	},
//        	{
//        		path:'analysis',
//        		name: 'Analysis',
//        		component: Analysis
//        	},
//        	{
//        		path:'news',
//        		name: 'News',
//        		component: News
//        	},
//        	{
//        		path:'comment',
//        		name: 'Comment',
//        		component: Comment
//        	}
//        ]
        },
        {
        	path: 'offer',
        	name: 'Offer',
        	component: Offer,
        	redirect: '/layout/offer/all',
        	children: [
        		{
        			path: 'all',
        			name: 'All',
        			component: Offer_all
        		},
        		{
        			path: 'hk',
        			name: 'HK',
        			component: Offer_HK
        		},
        		{
        			path: 'meigu',
        			name: 'Meigu',
        			component: Offer_meigu
        		},
        		{
        			path: 'hushen',
        			name: 'Hushen',
        			component: Offer_hushen
        		}
        	]
        },
        {
          path: 'market',
          name: 'Market',
          component: Market,
        },
        {
          path: 'doNew',
          name: 'DoNew',
          component: DoNew,
          redirect: '/layout/doNew/doNew_meigu',
          children: [
          	{
          		path: 'doNew_meigu',
          		name: 'DoNew_meigu',
          		component: DoNew_meigu
          	},
          	{
          		path: 'doNew_ganggu',
          		name: 'DoNew_ganggu',
          		component: DoNew_ganggu
          	}
          ]
        },
        {
          path: 'deal',
          name: 'Deal',
          component: Deal
        },
        {
          path: 'consult',
          name: 'Consult',
          component: Consult
        },
        {
          path: 'strategy',
          name: 'Strategy',
          component: Strategy
        },
        {
          path: 'message',
          name: 'Message',
          component: Message
        },
        {
        	path: 'academy',
        	name: 'Academy',
        	component: Academy
        },
        {
          path: 'friends',
          name: 'Friends',
          component: Friends
        }
      ]
    } 
  ]
})

router.beforeEach((to, from, next) => {
  //可以做 loadong 开始加载 效果
  // store.state.token = localStorage.getItem('Authorization'); //获取本地存储的token
  // if (to.meta.title) { //判断是否有标题  该操作可以再监听路由时候处理 watch:{'$route'(to,from){xxx操作}}
  //   document.title = to.meta.title
  // }  to.matched.some(r => r.meta.requireAuth)
  if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存
      // console.log('有token时候', to, from, next)
      next();
    } else {
      // console.log('没有token时候', to)
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})
export default router
