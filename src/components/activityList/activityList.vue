<template>
  <div class="activityList">
    <div class="main">
      <div class="title">
        <span>{{activityName}}</span>
        <div class="btn">
          <el-button ref="leftBtn" disabled @click="left" size="mini" icon="el-icon-arrow-left"></el-button>
          <el-button ref="rightBtn" @click="right" size="mini" icon="el-icon-arrow-right"></el-button>
        </div>
      </div>
      <div class="list" ref="list">
        <card-special v-for="item in activityList" :name="item.name" :img-url="item.imgUrl"></card-special>
      </div>
      <div class="bottomImg">
        <img src="@/assets/bottomImg.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import cardSpecial from "@/components/activityList/cardSpecial";
export default {
  name: "activityList",
  components: {cardSpecial},
  props:{
    activityName:{
      type:String,
      default(){
        return '酷车闪购'
      }
    },
    activityList: {
      type:Array
    }
  },
  data() {
    return {
      leftLength: 0,
    }
  },
  methods: {
    right() {
      this.leftLength = this.leftLength - 235 - 14
      this.$refs.list.style = `left:${this.leftLength}px`
      if(this.leftLength<0){
        this.$refs.leftBtn.$el.removeAttribute('disabled')
        this.$refs.leftBtn.$el.classList.remove('is-disabled')
      }
    },
    left() {
      this.leftLength = this.leftLength + 235 + 14
      this.$refs.list.style = `left:${this.leftLength}px`
      if (this.leftLength >= 0) {
        this.$refs.leftBtn.$el.setAttribute('disabled', "disabled")
        this.$refs.leftBtn.$el.classList.add('is-disabled')
      }
    }
  }
}
</script>

<style scoped lang="scss">

.main {
  position: relative;
  z-index: 9990;
  //background-color: #f5f5f5;
  padding: 0 20px;
  overflow: hidden;

  .title {
    display: flex;
    justify-content: space-between;
    height: 58px;
    line-height: 58px;

    span {
      font-size: 22px;
      color: #333333;
    }

    .btn {
      .el-button {
        margin: 0;
      }
    }
  }

  .list {
    position: relative;
    display: flex;
    margin-right: 14px;
    transition: left 0.5s;
    left: 0;
    margin-bottom: 22px;
  }

  .bottomImg{
    img{
      width: 100%;
    }

  }
}
</style>
