<template>
  <div class="top">
    <div class="index">
      <div class="logo">
        <img src="~@/assets/logo.png" alt="">
      </div>
      <div class="nav-box">
        <span v-for="item in nav" :key="item.name"
              :class="{active:isChecked(item)}" @click="navClick(item.path)">{{ item.name }}</span>
      </div>
      <div class="login">
        <el-dropdown trigger="click">
          <div>
            <el-avatar class="avatar" :size="50" :src="avatarSrc"></el-avatar>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >个人信息</el-dropdown-item>
            <el-dropdown-item >登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      nav: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '关于我们',
          path: '/about'
        },
        {
          name: '产品中心',
          path: '/product'
        },
        {
          name: '活动中心',
          path: '/project'
        },
        {
          name: '联系我们',
          path: '/contact'
        },
      ],
      avatarSrc: require('../../assets/avatar.png')
    }
  },
  methods: {
    isChecked(item) {
      return !item.path.indexOf(this.$route.path)
    },
    navClick(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  background-color: #FAFAFA;
  width: 100%;
}

.index {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 112px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 100%;
  margin-right: 10px;
}

.nav-box {
  width: 500px;
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
}

.nav-box span {
  /*不同浏览器的渐变效果*/
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.nav-box :hover {
  color: #3a8ee6;
  cursor: pointer;
}

.active {
  color: #3a8ee6;
}

.avatar {
  cursor: pointer;
}
</style>
