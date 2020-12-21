<template>
  <div class="activity">
    <hight-light text="活动展示" bg-text="Activities Display" :is-bg="true" class="title"/>
    <div class="main">
      <div class="title">
        <span>酷车闪购</span>
        <div class="btn">
          <el-button @click="left" size="mini" icon="el-icon-arrow-left"></el-button>
          <el-button @click="right" size="mini" icon="el-icon-arrow-right"></el-button>
        </div>
      </div>
      <div class="list" ref="list">
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
        <card-special></card-special>
      </div>
    </div>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
import cardSpecial from "@/components/activityList/cardSpecial";
export default {
  name: "activity",
  components:{
    HightLight,
    cardSpecial
  },
  methods:{
    right(){
      // console.log(this.$refs.  )
    },
    left(){

    }
  }
}
</script>

<style scoped lang="scss">
.activity{
  width: 1200px;
  margin: 0 auto;
  .main{
    background-color: #f5f5f5;
    overflow-x: hidden;
    .title{
      display: flex;
      justify-content: space-between;
      height: 58px;
      line-height: 58px;
      span{
        font-size: 22px;
        color: #333333;
      }
      .btn{
        .el-button{
          margin: 0;
        }
      }
    }
    .list{
      position: relative;
      display: flex;
      margin-right: 14px;
    }
  }
}
</style>
