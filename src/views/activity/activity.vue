<template>
  <div class="activity-wrapper">
    <hight-light text="促销活动" bg-text="Promotion Display" :is-bg="true" class="title"/>
    <div class="activity">
      <activity-list activity-name="汽车美容" :activity-list="actList[0]"/>
      <activity-list :activity-list="actList[1]"/>
    </div>
  </div>
</template>

<script>
import HightLight from "@/components/common/hightLight/HightLight";
import activityList from "@/components/activityList/activityList";
import List from '@/assets/activity'
export default {
  name: "activity",
  components: {
    HightLight,
    activityList
  },
  data() {
    return {
      leftLength: 0,
      actList: List
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.activity {
  width: 1200px;
  margin: 0 auto;
}

</style>
