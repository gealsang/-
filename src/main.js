import Vue from 'vue'

import App from './App.vue'
// 引入路由相关文件
import router from '@/router'
// 引入仓库进行注册
import store from '@/store'
// 三级联动组件---定义全局组件：在文件入口注册一次之后，在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'
// import Carsousel from '@/components/Carsousel'
import pagination from '@/components/Pagination'
import { Button,MessageBox } from 'element-ui';

// 全局组件：第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
// Vue.component(Carsousel.name, Carsousel)
Vue.component(pagination.name,pagination)
// 注册全局组件
Vue.component(Button.name,Button)
// ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入MockServe.js---mock数据
import '@/mock/mockServe';
// 引入swiper样式 
import 'swiper/swiper-bundle.css';
import Swiper, { Pagination, Navigation } from 'swiper'
Swiper.use([Pagination, Navigation])

Vue.config.productionTip = false

// 统一接口api文件夹里面全部请求函数
// 统一接口
import * as API from '@/api'
import pkq from '@/assets/1.gif'

// 引入插件
import VueLazyload from 'vue-lazyload'
// 使用插件,可以传配置对象
Vue.use(VueLazyload,{
  // 懒加载默认的图片
  loading:pkq
});

// 引入表单校验插件
import "@/plugins/validate";

// 把根组件挂载到挂载点上
new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件(非路由|路由组件)都可以获取到$route | $router属性
  //$route(路由):可以获取到路由信息(path、 query、 params )
  //$router:进行编程式导航路由跳转push||replace

  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store
}).$mount('#app')
