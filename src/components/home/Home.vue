<template>
  <div>
    <product class="product"/>
    <about class="about"/>
    <activity/>
    <project/>
    <Contact/>
  </div>
</template>

<script>
  import Product from "@/components/product/Product";
  import About from "@/components/about/About";
  import activity from "@/views/activity/activity";
  import Project from "@/components/project/Project";
  import Contact from "@/components/contact/Contact";
  export default {
    name: "Home",
    components: {Contact, Project, About, Product,activity},
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
