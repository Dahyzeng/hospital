<template>
  <div class="plan">
    <div class="plan-info">
      <header>
        <img alt="Vue logo" src="../../assets/config1.png" />
      </header>
      <van-form>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          @click="showPicker = true"
          label-class="plan-label"
          label="疾病分期"
          required
          placeholder="请选择疾病分期"
          right-icon="arrow"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <drug-input />
        <drug-input />
      </van-form>
      <div>
        <van-button icon="add-o" class="plan-button">添加用药</van-button>
        <router-link to="/psq">
          <van-button class="plan-button">
            <img src="./../../assets/wenjuan.png" />
            配症状问卷
          </van-button>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <van-button>完成</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, Picker, Field, Popup, Button } from "vant";
import DrugInput from "./DrugInput/index.vue";
@Component({
  components: {
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
    "drug-input": DrugInput,
  },
})
export default class Home extends Vue {
  showPicker = false;
  columns = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
  value = "";
  onConfirm = () => {
    this.showPicker = true;
  };
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>