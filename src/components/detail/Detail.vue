<template>
  <div class="detail">
    <div class="list">
      <hight-light :text="titleTest" :bg-text="titleTest" :is-bg="true"/>
<!--      <img :src="image" alt="">-->
      <introduce title="商家文案" :text="testText" :img="imageTest" :is-left="true" :is-white="true" :show-img="true"></introduce>
      <introduce title="商家文案" :text="testText" :img="imageTest" :is-left="false" :is-white="true" :show-img="true"></introduce>
     </div>
  </div>
</template>

<script>
  import {prodDetails} from "@/assets/products";
  import {projects} from "@/assets/project";
  import HightLight from "@/components/common/hightLight/HightLight";
  import Introduce from "../../views/about/Introduce";
  export default {
    name: "Detail",
    components:{HightLight,Introduce},
    data(){
      return{
        id:0,
        name:"",
        prodDetails,
        projects,
        image:"",
        titleTest:'北京卡奇亚汽车用品销售有限公司',
        testText:'爱车王国中国总部的所有产品均由日本株式会社洗車の王国（日本总部）提供，其中洗车美容产品包括：晶膜美容洗车、漆面镀晶、内饰清洁与保养、玻璃镀膜、轮胎轮毂清洁与保养、发动机外部清洁、车身塑料件护理等全系列；隐形车衣（车身透明保护膜）新固车盾（Syncshield）；酷雷明太阳膜；空气净化类产品包括：去异味杀菌消臭剂3号、去烟味杀菌消臭剂5号、空气净化魔方。\n\n同时也为汽车美容店提供全系列配套工具设备，包括德国高压洗车机、日本发泡枪、抛光机、自助流水枪、烘干机、甩干机、水电气毂、空压机、消毒机等，也包括毛巾、海绵、刷子等。',
        imageTest:require('@/assets/store/car/car1.jpg')
      }
    },
    created(){
      this.id=this.$route.query.id;
      this.name=this.$route.query.name;
      if(this.id<100){
      //  判断是产品还是案例
        for(let i of prodDetails){
          if (i.id===this.id){
            this.image=i.image
          }
        }
      }
      else{
        for(let i of projects){
          if(i.id===this.id){
            this.image=i.image
          }
        }
      }
    }
  }
</script>

<style scoped>
  .detail{
    display: flex;
    justify-content: center;
  }
  .list{

  }
  .list img{
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eeeeee;
    width: 75%;
  }
</style>
