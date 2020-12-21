<template>
  <div class="cardList">
    <card-special></card-special>
  </div>
</template>

<script>
import cardSpecial from "./cardSpecial";
import cardNormal from "./cardNormal";
export default {
  name: "cardList",
  components:{
    cardNormal,
    cardSpecial
  }
}
</script>

<style scoped>

</style>
