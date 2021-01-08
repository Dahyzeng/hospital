<template>
  <div class="plan">
    <header>
      <img alt="Vue logo" src="../../assets/config1.png" />
    </header>
    <van-form @submit="handleSubmit">
      <van-field
        clickable
        readonly
        :value="fenqi.text"
        @click="showIllness = true"
        label-class="plan-label"
        label="疾病分期"
        required
        placeholder="请选择疾病分期"
        right-icon="arrow"
        :rules="[{required: true}]"
      />
      <van-popup v-model="showIllness" round position="bottom">
        <van-picker
          show-toolbar
          :columns="illnessColumns"
          @confirm="onIllnessCofirm"
          @cancel="showIllness=false"
        />
      </van-popup>
      <div class="drug-input" v-for="(item, index) in drugInfos" :key="index">
        <van-field
          v-model="item.drugName"
          label-class="plan-label"
          label="药品名称"
          required
          placeholder="请输入药品名称"
          :rules="[{required: true}]"
        />
        <van-field
          v-model="item.specification"
          label-class="plan-label"
          label="药品规格"
          required
          placeholder="请输入药品规格，例2mg*10片"
          :rules="[{required: true}]"
        />
        <van-field
          v-model="item.useMethod"
          label-class="plan-label"
          label="用法用量"
          required
          placeholder="请填写用法用量"
          :rules="[{required: true}]"
        />
        <van-field
          :value="item.useTime.text"
          @click="showUseTime = true"
          label-class="plan-label"
          label="饭前饭后"
          required
          placeholder="请填写用法用量"
          clickable
          readonly
          :rules="[{required: true}]"
        />
         <van-popup v-model="showUseTime" round position="bottom">
          <van-picker
            show-toolbar
            :columns="illnessColumns"
            @confirm="(v) => onUseTimeConfirm(v, index)"
            @cancel="showUseTime=false"
          />
        </van-popup>
        <van-field
          clickable
          readonly
          :value="item.period.text"
          @click="showPeriod = true"
          label-class="plan-label"
          label="服用周期"
          required
          placeholder="请选择起始日期"
          :rules="[{required: true}]"
        />
        <van-popup v-model="showPeriod" round position="bottom">
          <van-picker
            show-toolbar
            :columns="illnessColumns"
            @confirm="(v) => onPeriodConfirm(v, index)"
            @cancel="showPeriod=false"
          />
        </van-popup>
        <div class="operation">
          <a>清空</a>
          <a>删除药品</a>
        </div>
      </div>
      <div class="footer">
      <van-button native-type="submit">完成</van-button>
    </div>
    </van-form>
    <div :style="{marginTop: '0.84rem'}">
      <van-button icon="add-o" class="plan-button" @click="addDrugInfo">添加用药</van-button>
      <router-link to="/psq">
        <van-button class="plan-button">
          <img src="./../../assets/wenjuan.png" />
          配症状问卷
        </van-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from 'vuex-class';
import { Form, Picker, Field, Popup, Button } from "vant";
// import DrugInput from "./DrugInput/index.vue";
@Component({
  components: {
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    // "drug-input": DrugInput,
  },
})
export default class Home extends Vue {
  public drugInfos: any[];
  public fenqi: any;
  public showIllness: boolean;
  public showUseTime: boolean;
  public showPeriod: boolean;
  public illnessColumns = [
    {
      text: '新科技',
      value: 1
    },
    {
      text: '是否为',
      value: 2
    }
  ]
  constructor() {
    super();
    this.drugInfos = [];
    this.fenqi = "";
    this.showIllness = false;
    this.showUseTime = false;
    this.showPeriod = false;
  }
  public addDrugInfo() {
    this.drugInfos.push({
      drugName: '',
      specification: '',
      useMethod: '',
      useTime: {},
      period: {},
    })
  }
  public handleSubmit(values: any) {
    console.log(this.fenqi);
    console.log(this.drugInfos);
  }
  public onIllnessCofirm(v: any) {
    this.fenqi = v;
    this.showIllness = false;
  };
  public onUseTimeConfirm(v: any, index: any) {
    this.$set(this.drugInfos[index], 'useTime', v);
    this.showUseTime = false;
  }
  public onPeriodConfirm(v: any, index: any) {
    this.$set(this.drugInfos[index], 'period', v);
    this.showPeriod = false; 
  }
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>