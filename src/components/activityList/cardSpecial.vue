<template>
  <div class="cardSpecial">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
           class="image">
      <div style="padding: 14px;">
        <span>活动案例</span>
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
