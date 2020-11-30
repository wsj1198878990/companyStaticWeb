<template>
  <div class="product">
    <div class="nav">
      <navbar :current-type="currentType" @itemClick="itemClick"/>
    </div>
    <div class="list">
      <hight-light text="产品中心" bg-text="Product Center" :is-bg="true" id="title"/>
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
  import {eduProducts,lanProducts,indProducts} from "@/assets/products";

  export default {
    name: "Product",
    components: {HightLight, Navbar, ProductList},
    data() {
      return {
        eduProducts,
        lanProducts,
        indProducts,
        currentType:'',
        currentList:null
      }
    },
    mounted(){
      this.currentType='教育照明'
      this.currentList=eduProducts
    },
    methods:{
      itemClick(item) {
        switch (item) {
          case '教育照明':
            this.currentList = eduProducts;
            this.currentType='教育照明';

            break;
          case '户外照明':
            this.currentList = lanProducts;
            this.currentType='户外照明';
            break;
          case '工业照明':
            this.currentList = indProducts;
            this.currentType='工业照明';
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
