<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home,Search显示的，在登录，注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
  // 引入子组件
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'app',
    // 注册
    components:{
      Header,
      Footer
    },
    mounted(){
      // 通知vuex发请求，获取数据，存储于仓库之中
    // 派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
    }

  }
</script>

<style>

</style>