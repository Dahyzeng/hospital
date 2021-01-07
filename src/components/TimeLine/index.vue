<template>
  <div class="time-line">
    <div class="inner">
      <div class="circle"></div>
      <div class="time">2020/03/14</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component()
export default class DrugPlan extends Vue {
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>