<template>
  <div class="patient-info">
    <div>
      <van-form @submit="handleFormSubmit">
        <van-field
          name="tel"
          :value="value"
          label="手机号"
          label-class="info-label"
          required
          placeholder="请输入"
        />
        <van-field
          name="name"
          :value="value"
          label="姓名"
          label-class="info-label"
          required
          placeholder="请输入"
        />
        <van-field
          readonly
          clickable
          name="sex"
          :value="value"
          @click="showPicker = true"
          label-class="info-label"
          label="性别"
          required
          placeholder="请选择"
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
        <van-field
          name="name"
          :value="value"
          label-class="info-label"
          label="年龄"
          required
          placeholder="请输入"
        />
        <div :style="{ margin: '0.63rem 0' }">
          <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            @click="showPicker = true"
            label-class="info-label"
            label="疾病分期"
            required
            placeholder="请选择"
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
          <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            @click="showPicker = true"
            label-class="info-label"
            label="疗程"
            required
            placeholder="请选择"
            right-icon="arrow"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="sexList"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        </div>
        <div>
          <div class="textarea-label">出院小结</div>
          <van-field
            v-model="comment"
            type="textarea"
            rows="3"
            maxlength="200"
            show-word-limit
            placeholder="请输入"
          />
        </div>
        <div :style="{ margin: '0.63rem 0' }">
          <div class="textarea-label">备注</div>
          <van-field
            v-model="comment"
            type="textarea"
            rows="3"
            maxlength="200"
            show-word-limit
            placeholder="请输入"
          />
        </div>
      </van-form>
    </div>
    <div class="footer">
      <van-button>确认</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, Picker, Field, Popup, Button } from "vant";
@Component({
  components: {
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
})
export default class Home extends Vue {
  showPicker = false;
  sexList = ["男", "女"];
  columns = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
  value = "";
  comment = "";
  onConfirm = () => {
    this.showPicker = true;
  };
  public handleFormSubmit(values: any) {
    console.log();
  }
}
</script>
<style lang="less">
@import url("./index.less");
</style>