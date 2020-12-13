<template>
  <div class="product">
    <div class="nav">
      <navbar :current-type="currentType" @itemClick="itemClick"/>
    </div>
    <div class="list">
      <hight-light text="商家展示" bg-text="Store Display" :is-bg="true" id="title"/>
      <div class="productList">
        <ProductList :projects="currentList" img-height="260px"></ProductList>
      </div>
    </div>
  </div>
</template>

<script>
  import HightLight from "@/components/common/hightLight/HightLight";
  import Navbar from "@/views/product/navbar/Navbar";
  import ProductList from "@/components/common/productList/ProductList";
  import {eduProducts,lanProducts,indProducts,car} from "@/assets/products";

  export default {
    name: "Product",
    components: {HightLight, Navbar, ProductList},
    data() {
      return {
        eduProducts,
        lanProducts,
        indProducts,
        car,
        currentType:'',
        currentList:null
      }
    },
    mounted(){
      this.currentType='餐饮美食'
      this.currentList=car
    },
    methods:{
      itemClick(item) {
        switch (item) {
          case '餐饮美食':
            //this.currentList = eduProducts;
            this.currentType='餐饮美食';
            break;
          case '汽车改装':
            //this.currentList = lanProducts;
            this.currentType='汽车改装';
            break;
          case '酒店住宿':
            //this.currentList = indProducts;
            this.currentType='酒店住宿';
        }
      }
    }
  }
</script>

<style scoped>
  .product {
    display: flex;
    justify-content: center;
  }

  .list {
    width: 1200px;
    text-align: center;
  }

  .list p {
    font-size: 30px;
  }

  .nav {
    margin-top: 135px;
  }
  .productList{
    padding-left: 30px;
  }
  #title{
    padding-right: 210px;
  }
</style>
