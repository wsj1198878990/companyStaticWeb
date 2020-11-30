<template>
  <div class="top">
    <div class="bottom">
      <div class="content">
        <div class="index">
          <span v-for="item in nav" :key="item.name" @click="navClick(item.path)">{{item.name}}</span>
        </div>
        <div class="law">
          <span>版权所有： 北京雅明照明科技有限公司 备案号 xxxxxxxxxxxxxxxxx</span>
        </div>
      </div>
      <div class="img">
        <img src="~@/assets/code.jpg" alt="">
        <p>扫一扫，联系我们</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Bottom",
    data(){
      return{
        nav:[
          {
            name:'首页',
            path:'/home'
          },
          {
            name:'关于我们',
            path:'/about'
          },
          {
            name:'产品中心',
            path:'/product'
          },
          {
            name:'案例中心',
            path:'/project'
          },
          {
            name:'联系我们',
            path:'/contact'
          },
        ]
      }
    },
    methods:{
      navClick(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 170px;
    background-color: #444444;
    display: flex;
    justify-content: center;
  }
  .bottom{
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content{
    width: 60%;
  }
  .img{

  }
  .img p{
    margin: 0;
    color: #888888;
    font-size: 14px;
  }
  .img img{
    margin-top: 10px;
    width: 95px;
    height: 91px;
    border: 5px solid #3a8ee6;
  }
  .index{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    border-bottom: 1px dashed #666666;
    padding-bottom: 30px;
    color: #cccccc;
  }
  .law{
    padding-top: 30px;
    color: #999999;
    font-size: 12px;
  }
  .index :hover{
    font-weight: bold;
    color: #FFFFFF;
    cursor:pointer;
  }
</style>
