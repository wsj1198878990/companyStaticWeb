<template>
  <div class="introduce" :class="{bgc:!isWhite}">
    <div class="content">
      <div class="img" v-show="isLeft">
        <img :src=img alt="">
      </div>
      <div class="text">
        <strong>{{title}}</strong>
        <p>{{text}}</p>
      </div>
      <div class="img" v-show="!isLeft">
        <img :src=img alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Introduce",
    props:{
      title:{
        type:String
      },
      text:{
        type:String
      },
      isLeft:{
        type:Boolean,
        default(){
          return true
        }
      },
      isWhite:{
        type:Boolean,
        default(){
          return false
        }
      },
      img:{
        type:String
      }
    },
  }
</script>

<style scoped>
  .bgc{
    background-color: #eeeeee;
  }
  .introduce{
    display: flex;
    height: 549px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .content{
    font-size: 14px;
    color: #666666;
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .content img{
    height: 350px;
    width: 600px;
  }
  .img{
    margin-right: 50px;
  }
  strong{
    font-size: 25px;
    font-weight: bold;
  }
  .text{
    margin-right: 50px;
  }

</style>
