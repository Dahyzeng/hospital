<template>
  <div class="feedback-page">
    <van-tabs
      class="feedback-tabs"
      color="#007FFF"
      title-active-color="#007FFF"
      sticky
    >
      <van-tab title="全部">
        <drug-plan />
        <drug-plan />
        <symptoms />
        <assessment />
      </van-tab>
      <van-tab title="用药计划">
        <drug-plan />
        <drug-plan />
      </van-tab>
      <van-tab title="反应症状">
        <symptoms />
        <symptoms />
      </van-tab>
      <van-tab title="体力评估">
        <assessment />
        <assessment />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tab, Tabs } from "vant";
import DrugPlan from "./DrugPlan/index.vue";
import Symptoms from "./Symptoms/index.vue";
import Assessment from "./Assessment/index.vue";
@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    "drug-plan": DrugPlan,
    symptoms: Symptoms,
    assessment: Assessment,
  },
})
export default class Feedback extends Vue {}
</script>
<style lang="less">
@import url("./index.less");
</style>