<template>
  <div class="product-list">
    <product-list-item v-for="item in projects" :project="item" :img-height="imgHeight"></product-list-item>
  </div>
</template>

<script>
  import ProductListItem from "@/components/common/productList/ProductListItem";
  export default {
    name: "ProductList",
    props:['projects','imgHeight'],
    components:{
      ProductListItem
    },
  }
</script>

<style scoped>
  .product-list{
    display: flex;
    flex-wrap: wrap;
  }
</style>
