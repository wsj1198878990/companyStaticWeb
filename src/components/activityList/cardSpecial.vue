<template>
  <div class="cardSpecial">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img :src=imgUrl
           class="image">
      <div style="padding: 14px;">
        <span>{{ name }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ nowDate }}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "cardSpecial",
  props:{
    name:{
      type:String
    },
    imgUrl:{
      type:String
    }
  },
  created() {


  },
  data(){
    return{
      date:''
    }
  },
  computed:{
    nowDate(){
      return new Date().Format("yyyy-MM-dd")
    }
  }
}
</script>

<style scoped lang="scss">
.cardSpecial {
  width: 234px;
  cursor: pointer;
  margin-right: 14px;
}
</style>
