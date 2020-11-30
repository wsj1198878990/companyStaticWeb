<template>
  <div class="bg">
    <div class="hight-light" >
      <div class="content">
        <div v-show="isBg"><strong>{{bgText}}</strong></div>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HightLight",
    props:{
      text:{
        type:String
      },
      isBg:{
        type:Boolean,
        default(){
          return false
        }
      },
      bgText:{
        type:String
      }
    }
  }
</script>

<style scoped>
  .hight-light{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
  .content{
    position: relative;
    width: 1200px;
    text-align: center;
  }
  .content p{
    font-size: 34px;
    margin: 0;
    position: absolute;
    top: 50px;
    left: 45%;
    z-index: 999;
  }
  .content strong{
    font-weight: bold;
    color: #eeeeee;
    font-size: 72px;
  }
</style>
