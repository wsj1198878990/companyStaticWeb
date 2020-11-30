<template>
  <div>
    <hight-light :is-bg="true" text="关于我们" bg-text="About Us" />
    <introduce v-for="item in introduces"
               :key="item.title"
               :is-left="item.isLeft"
               :text="item.text"
               :title="item.title"
               :img="item.img"
               :is-white="item.isWhite"></introduce>
  </div>
</template>

<script>
  import HightLight from "@/components/common/hightLight/HightLight";
  import Introduce from "@/views/about/Introduce";
  import {introduces} from "@/assets/about";

  export default {
    name: "About",
    components:{
      HightLight,
      Introduce
    },
    data(){
      return {
        introduces
      }
    }
  }
</script>

<style scoped>

</style>
