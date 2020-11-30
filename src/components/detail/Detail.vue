<template>
  <div class="detail">
    <div class="list">
      <hight-light :text="name" :bg-text="name" :is-bg="true"/>
      <img :src="image" alt="">
    </div>
  </div>
</template>

<script>
  import {prodDetails} from "@/assets/products";
  import {projects} from "@/assets/project";
  import HightLight from "@/components/common/hightLight/HightLight";
  export default {
    name: "Detail",
    components:{HightLight},
    data(){
      return{
        id:0,
        name:"",
        prodDetails,
        projects,
        image:""
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
    width: 1200px;
    text-align: center;
  }
  .list img{
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eeeeee;
    width: 75%;
  }
</style>
