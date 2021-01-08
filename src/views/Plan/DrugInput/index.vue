<template>
  <div class="drug-input">
    <van-field
      v-model="drugName"
      @click="showPicker = true"
      label-class="plan-label"
      label="药品名称"
      required
      placeholder="请输入药品名称"
    />
    <van-field
      v-model="specification"
      @click="showPicker = true"
      label-class="plan-label"
      label="药品规格"
      required
      placeholder="请输入药品规格，例2mg*10片"
    />
    <van-field
      v-model="useMethod"
      @click="showPicker = true"
      label-class="plan-label"
      label="用法用量"
      required
      placeholder="请填写用法用量"
    />
    <van-field
      v-model="useTime"
      @click="showPicker = true"
      label-class="plan-label"
      label="饭前饭后"
      required
      placeholder="请填写用法用量"
    />
    <van-field
      v-model="period"
      @click="showPicker = true"
      label-class="plan-label"
      label="服用周期"
      required
      placeholder="请选择起始日期"
    />
    <div class="operation">
      <a>清空</a>
      <a>删除药品</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Picker, Field } from "vant";
@Component({
  components: {
    [Picker.name]: Picker,
    [Field.name]: Field,
  },
})
export default class DrugInput extends Vue {
  public drugName: string;
  public specification: string;
  public useMethod: string;
  public useTime: number;
  public period: string;
  @Prop() info: any;
  @Prop() onDelete!: () => void;
  constructor(props: any) {
    super();
    this.drugName = this.info.drugName;
    this.specification = this.info.specification;
    this.useMethod = this.info.useMethod;
    this.useTime = this.info.useTime;
    this.period = this.info.period;
  }
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>