<template>
  <time-line>
    <div class="assessment">
        <div>
          <span class="label">ECOG评估等级：</span>
          <span class="level">2级</span>
        </div>
        <div>
          能自由走动及生活自理，但已丧失工作能力，日间不少于一半时间可以起床活动。
        </div>
      </div>
  </time-line>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import TimeLine from '@/components/TimeLine/index.vue';
@Component({
  components: {
    "time-line": TimeLine
  }
})
export default class DrugPlan extends Vue {
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>