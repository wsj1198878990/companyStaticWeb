import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('../components/home/Home');
const About = ()=>import('@/components/about/About');
const Contact = ()=>import('@/components/contact/Contact');
const Product = ()=>import('@/components/product/Product');
const Project = ()=>import('@/components/project/Project');
const Detail = ()=>import('@/components/detail/Detail');
const activity =()=>import('@/views/activity/activity.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
    name:'home',
    meta:{
      title:'首页'
    }
  },
  {
    path: '/about',
    component:About,
    name:'about',
    meta:{
      title:'关于'
    }
  },
  {
    path: '/contact',
    component:Contact,
    name:'contact',
    meta:{
      title:'联系我们'
    }
  },
  {
    path: '/product',
    component:Product,
    name:'product',
    meta:{
      title:'产品'
    }
  },
  {
    path: '/project',
    component:Project,
    name:'project',
    meta:{
      title:'项目'
    }
  },
  {
    path: '/detail',
    component:Detail,
    name:'detail',
    meta:{
      title:'详细'
    }
  },
  {
    path: '/activity',
    component:activity,
    name:'activity',
    meta:{
      title:'活动'
    }
  }
]

const router = new VueRouter({
  routes,
});

export default router
