import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';
import './util/format'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$bus = new Vue()
Vue.use(BaiduMap,{
  ak:'6kw2pvn0h71KbPBhZFzL6uVGtfGnpQiI'
});

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
