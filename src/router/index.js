import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('../components/home/Home');
const About = ()=>import('@/components/about/About');
const Contact = ()=>import('@/components/contact/Contact');
const Product = ()=>import('@/components/product/Product');
const Project = ()=>import('@/components/project/Project');
const Detail = ()=>import('@/components/detail/Detail');
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/about',
    component:About
  },
  {
    path: '/contact',
    component:Contact
  },
  {
    path: '/product',
    component:Product
  },
  {
    path: '/project',
    component:Project
  },
  {
    path: '/detail',
    component:Detail
  },
]

const router = new VueRouter({
  routes,
});

export default router
