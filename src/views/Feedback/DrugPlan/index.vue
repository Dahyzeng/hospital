<template>
  <time-line>
    <div class="drug-plan">
      <div class="drug-info">
        <img src="@/assets/drug.png"/>
        <div class="drug-name">易瑞沙(Iressa)</div>
        <div class="specification">规格：250mg*10片</div>
      </div>
      <div class="drug-info">
        <img src="@/assets/warning.png"/>
        <div class="drug-name">用法用量：1片/次，一日一次</div>
        <div class="specification">饭前饭后：饭后服用</div>
        <div class="specification">服用周期：2020-01-02 至 2020-03-02</div>
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