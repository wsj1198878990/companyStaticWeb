<template>
  <div class="top">
<!--    这里注意设置轮播高度和图片高度一致-->
    <el-carousel :interval="4000" height="600px">
      <el-carousel-item v-for="item in swiper">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data(){
      return{
        swiper:[
          {
            img: require('@/assets/swiper/swiper1.png'),
            href:''
          },
          {
            img: require('@/assets/swiper/swiper2.png'),
            href:''
          },
          {
            img: require('@/assets/swiper/swiper3.png'),
            href:''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .top img{
    width: 100%;
    height: 100%;
  }
  .top{
    width: 100%;
  }
</style>
