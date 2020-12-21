<template>
  <div class="activity">
    <hight-light text="活动展示" bg-text="Activities Display" :is-bg="true" class="title"/>
    <div class="main">
      <div class="title">
        <span>酷车闪购</span>
        <div class="btn">
          <el-button size="mini" icon="el-icon-arrow-left"></el-button>
          <el-button size="mini" icon="el-icon-arrow-right"></el-button>
        </div>
      </div>
      <div class="list">
        <card-list>

        </card-list>
      </div>
    </div>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
import CardList from "../../components/activityList/cardList";
export default {
  name: "activity",
  components:{
    CardList,
    HightLight
  }
}
</script>

<style scoped lang="scss">
.activity{
  width: 1200px;
  margin: 0 auto;
  .main{
    background-color: #f5f5f5;
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
  }
}
</style>
