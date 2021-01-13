<template>
  <div class="Navbar">
    <div class="main">
      <p>分类</p>
    </div>
    <div class="check" v-for="(item,index) in items" :key="index" @click="itemClick(item)">
      <div class="item" :class="{active:currentType===item}">
        {{item}}
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
        items:['美食','改装','住宿']
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
  @media screen and (min-width: 1400px){
    .Navbar{
      width: 100px !important;
    }
    .item{
      width: 100px !important;
    }
  }
  .Navbar{
    width: 50px;
    border: 1px solid #dfdfdf;
  }
  .main{
    background-color: #3a8ee6;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
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
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    border-bottom:1px solid #dfdfdf;
    width: 50px;
    height: 50px;
    text-align: center;
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
