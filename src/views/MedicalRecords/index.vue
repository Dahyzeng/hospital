<template>
  <div class="medical-records">
    <time-line v-for="(item, index) in list">
      <div class="record-unit">
        <div class="unit-header">
          <span class="title">病例资料</span>
          <a class="detail">查看详情 <van-icon name="arrow" /></a>
        </div>
        <div class="content">净增强CT,目前无其他转移，下一步准备化疗，当地医院采用奥沙利铂+佛尿嘧啶，就目前化化净增强CT,目前无其他转移，下一步准备化疗，当地医院采用奥沙利铂+佛尿嘧啶，就目前化化</div>
        <div class="img-part">
          <img src="@/assets/2.png"/>
          <img src="@/assets/2.png"/>
          <img src="@/assets/2.png"/>
          <img src="@/assets/2.png"/>
        </div>
      </div>
    </time-line>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TimeLine from '@/components/TimeLine/index.vue';
import { Icon } from 'vant';
@Component({
  components: {
    "time-line": TimeLine,
    [Icon.name]: Icon
  }
})
export default class Feedback extends Vue {
  list = [1,2]
}
</script>
<style lang="less">
@import url("./index.less");
</style>