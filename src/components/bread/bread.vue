<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
    <el-breadcrumb-item v-for="item in breadList" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
name: "bread",
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route&&route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      console.log(matched)
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
      console.log(this.breadList)
    }
  },
  created() {
    this.getBreadcrumb();
  }
}
</script>

<style scoped>
  .el-breadcrumb{
    font-size: 22px;
    margin: 0 auto;
    height: 100px;
    line-height: 100px;
    border: #fafafa solid 1px;
  }
</style>
