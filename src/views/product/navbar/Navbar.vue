<template>
  <div class="Navbar">
    <div class="main">
      <i class="el-icon-caret-right"></i>
      <p>商家分类</p>
    </div>
    <div class="check" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
      <div class="item" :class="{active:currentType===item}">
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    props:{
      currentType: {
        type:String
      }
    },
    data(){
      return{
        items:['餐饮美食','汽车改装','酒店住宿']
      }
    },
    methods:{
      itemClick(item){
        this.$emit('itemClick',item)
      }
    }
  }
</script>

<style scoped>
  .Navbar{
    width: 200px;
    border: 1px solid #dfdfdf;
  }
  .main{
    background-color: #3a8ee6;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border-bottom:1px solid #dfdfdf
  }
  .main i{
    margin-right: 5px;
    margin-left: 15px;
  }
  .item{
    color: #666666;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    border-bottom:1px solid #dfdfdf;
    padding-left: 34px;
    width: 166px;
    height: 50px;
  }
  .check :hover{
    background-color: #3a8ee6;
    color: #FFFFFF;
    transition: all .5s;
    cursor:pointer;
  }
  .active{
    background-color: #3a8ee6;
    color: #FFFFFF;
  }
</style>
