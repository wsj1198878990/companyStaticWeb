<template>
  <div class="product-list-item" @click="itemClick">
    <img :src="project.image" alt="" :style={height:imgHeight,width:width}>
    <p>{{project.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "ProductListItem",
    props:{
      project:Object,
      imgHeight: {
        type:String,
        default(){
          return " "
        }
      }
    },
    data(){
      return{
        width:"350px"
      }

    },
    methods:{
      itemClick(){
        this.$router.push({
          path:'/detail',
          query:{
            name:this.project.name,
            id:this.project.id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .product-list-item img{
    width: auto;
    height: auto;
    overflow: hidden;
    transition: all 0.6s;
    margin-bottom: 10px;
  }
  .product-list-item p{
    margin: 0;
    text-align: center;
  }
  .product-list-item{
    padding:15px;
  }
  .product-list-item img:hover{
    transform: scale(1.1);
    cursor:pointer;
  }
</style>
