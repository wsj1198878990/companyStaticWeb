<template>
  <div>
    <product class="product"/>
    <about class="about"/>
    <project/>
    <Contact/>
  </div>
</template>

<script>
  import Product from "@/components/product/Product";
  import About from "@/components/about/About";
  import Project from "@/components/project/Project";
  import Contact from "@/components/contact/Contact";
  export default {
    name: "Home",
    components: {Contact, Project, About, Product},
  }
</script>

<style scoped>
  .product{
    height: 770px;
    overflow: hidden;
  }
 .about{
   height: 644px;
   overflow: hidden;
 }
</style>
