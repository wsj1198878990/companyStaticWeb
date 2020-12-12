<template>
  <div class="project">
    <div class="list">
      <hight-light text="活动展示" bg-text="Activities Display" :is-bg="true" class="title"/>
      <ProductList :projects="act" img-height="260px"></ProductList>
    </div>
  </div>
</template>

<script>
  import ProductList from "@/components/common/productList/ProductList";
  import HightLight from "@/components/common/hightLight/HightLight";
  import {projects} from "@/assets/project";
  import {act} from "@/assets/act";

  export default {
    name: "Project",
    components:{
      ProductList,
      HightLight
    },
    data(){
      return {projects,act}
    }
  }
</script>

<style scoped>
  .project{
    display: flex;
    justify-content: center;
  }
  .list{
    width: 1200px;
    text-align: center;
    margin-bottom: 30px;
  }
  .list p{
    font-size: 30px;
  }
  .title{
    margin-right: 15px;
  }
</style>
