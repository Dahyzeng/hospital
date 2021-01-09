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
        :rules="[{ required: true }]"
      />
      <van-popup v-model="showIllness" round position="bottom">
        <van-picker
          show-toolbar
          :columns="stagingList"
          @confirm="onIllnessCofirm"
          @cancel="showIllness = false"
        />
      </van-popup>
      <div class="drug-input" v-for="(item, index) in drugInfos" :key="index">
        <van-popover
          v-model="item.showDrugSearch"
          placement="bottom"
          :actions="drugNameList"
          @select="(value) => handleDrugSelect(value, index)"
        >
          <template #reference>
            <van-field
              v-model="item.drugsName"
              label-class="plan-label"
              label="药品名称"
              required
              placeholder="请输入药品名称"
              :rules="[{ required: true }]"
              @input="(v) => handleDrugInput(v, index)"
            />
          </template>
        </van-popover>
        <van-field
          v-model="item.drugsSpecifications"
          label-class="plan-label"
          label="药品规格"
          required
          placeholder="请输入药品规格，例2mg*10片"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="item.dosage"
          label-class="plan-label"
          label="用法用量"
          required
          placeholder="请填写用法用量"
          :rules="[{ required: true }]"
        />
        <van-field
          :value="item.takingTimeType.text"
          @click="showUseTime = true"
          label-class="plan-label"
          label="饭前饭后"
          required
          placeholder="请选择服用时间"
          clickable
          readonly
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showUseTime" round position="bottom">
          <van-picker
            show-toolbar
            :columns="takingTypeList"
            @confirm="(v) => onUseTimeConfirm(v, index)"
            @cancel="showUseTime = false"
          />
        </van-popup>
        <van-field
          clickable
          readonly
          :value="getRangeTime(item.takingCycleStart, item.takingCycleEnd)"
          @click="showPeriod = true"
          label-class="plan-label"
          label="服用周期"
          required
          placeholder="请选择起始日期"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showPeriod" round position="bottom">
          <van-calendar
            v-model="showPeriod"
            color="#1989fa"
            type="range"
            @confirm="(v) => onRangeConfirm(v, index)"
            @cancel="showPeriod = false"
          />
        </van-popup>
        <div class="operation">
          <a @click="() => handleClearInfo(index)">清空</a>
          <a @click="() => handleDeleteInfo(index)">删除药品</a>
        </div>
      </div>
      <div class="footer">
        <van-button native-type="submit">完成</van-button>
      </div>
    </van-form>
    <div :style="{ marginTop: '0.84rem' }">
      <van-button icon="add-o" class="plan-button" @click="addDrugInfo"
        >添加用药</van-button
      >
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
// import { State, Action } from 'vuex-class';
import { Form, Picker, Field, Popup, Button } from "vant";
import moment from "moment";
import serve from "@/service/plan";
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
  public drugNameList: any[];
  public stagingList: any[];
  public takingTypeList: any[];
  constructor() {
    super();
    this.drugInfos = [];
    this.fenqi = "";
    this.showIllness = false;
    this.showUseTime = false;
    this.showPeriod = false;
    this.drugNameList = [];
    this.stagingList = [];
    this.takingTypeList = [];
  }
  public created() {
    serve.dictQuery({ type: "DISEASE_STAGING" }).then((res: any) => {
      if (res.resultCode === 200) {
        this.stagingList = res.data.dictList;
      }
    });
    serve.dictQuery({ type: "TAKING_TIME_TYPE" }).then((res: any) => {
      if (res.resultCode === 200) {
        this.takingTypeList = res.data.dictList;
      }
    });
  }
  public addDrugInfo() {
    this.drugInfos.push({
      drugsName: "",
      drugsSpecifications: "",
      dosage: "",
      takingTimeType: {},
      takingCycleStart: "",
      takingCycleEnd: "",
      showDrugSearch: false,
    });
  }
  public getRangeTime(startTime: string, endTime: string) {
    if (startTime && endTime) {
      return (
        moment(startTime).format("YYYY-MM-DD") +
        " ~ " +
        moment(endTime).format("YYYY-MM-DD")
      );
    } else {
      return "";
    }
  }
  public handleDrugSelect(value: any, infoIndex: number) {
    setTimeout(() => {
      this.$set(this.drugInfos, infoIndex, {
        drugsName: "阿司匹林",
        drugsSpecifications: "士大夫",
        dosage: "十分文物",
        takingTimeType: { value: 1, text: "新科技" },
        period: { value: 1, text: "新科技" },
      });
    }, 0);
  }
  public handleDrugInput(v: string, index: number) {
    setTimeout(() => {
      this.$set(this.drugInfos[index], "showDrugSearch", true);
      this.drugNameList = [
        {
          text: "阿司匹林",
        },
        {
          text: "sdfs",
        },
      ];
    }, 1000);
  }
  public handleSubmit(values: any) {
    console.log(this.drugInfos);
    console.log(this.$route.params.patientId);
  }
  public onIllnessCofirm(v: any) {
    this.fenqi = v;
    this.showIllness = false;
  }
  public onUseTimeConfirm(v: any, index: any) {
    this.$set(this.drugInfos[index], "takingTimeType", v);
    this.showUseTime = false;
  }
  public onRangeConfirm(v: any, index: any) {
    this.$set(
      this.drugInfos[index],
      "takingCycleStart",
      moment(v[0].getTime()).format("YYYY-MM-DD")
    );
    this.$set(
      this.drugInfos[index],
      "takingCycleEnd",
      moment(v[1].getTime()).format("YYYY-MM-DD")
    );
    this.showPeriod = false;
  }
  public handleClearInfo(index: number) {
    this.$set(this.drugInfos, index, {
      drugsName: "",
      drugsSpecifications: "",
      dosage: "",
      takingTimeType: {},
    });
  }

  public handleDeleteInfo(index: number) {
    this.drugInfos.splice(index, 1);
  }
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>