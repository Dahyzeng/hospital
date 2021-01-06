<template>
  <div class="drug-input">
    <van-field
      name="name"
      :value="value"
      @click="showPicker = true"
      label-class="plan-label"
      label="药品名称"
      required
      placeholder="请输入药品名称"
    />
    <van-field
      name="name"
      :value="value"
      @click="showPicker = true"
      label-class="plan-label"
      label="药品规格"
      required
      placeholder="请输入药品规格，例2mg*10片"
    />
    <van-field
      name="name"
      :value="value"
      @click="showPicker = true"
      label-class="plan-label"
      label="用法用量"
      required
      placeholder="请填写用法用量"
    />
    <van-field
      name="name"
      :value="value"
      @click="showPicker = true"
      label-class="plan-label"
      label="饭前饭后"
      required
      placeholder="请填写用法用量"
    />
    <van-field
      name="name"
      :value="value"
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
import { Component, Vue } from "vue-property-decorator";
import { Picker, Field } from "vant";
@Component({
  components: {
    [Picker.name]: Picker,
    [Field.name]: Field,
  },
})
export default class DrugInput extends Vue {
  value = "";
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>