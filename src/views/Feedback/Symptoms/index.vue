<template>
  <time-line>
    <div class="symptoms">
        <div>
          <span class="label">用药反应：</span>
          <span class="reaction">有呕吐、反胃</span>
        </div>
        <div>
          <span class="label">症状等级：</span>
          <span class="level">每次增加4次</span>
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