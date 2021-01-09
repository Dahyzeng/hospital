<template>
  <div class="patient-info">
    <div>
      <van-form @submit="handleFormSubmit">
        <!-- <van-popover
          v-model="showTelModal"
          placement="bottom"
          :actions="telList"
          @select="(value) => handleTelSelect(value)"
        >
          <template #reference>
            <van-field
              name="patientPhone"
              v-model="patientPhone"
              type="tel"
              label="手机号"
              label-class="info-label"
              required
              placeholder="请输入手机号"
              :rules="[{ required: true }]"
              @input="(v) => handleTelInput(v)"
            />
          </template>
        </van-popover> -->
        <van-field
          name="patientPhone"
          v-model="patientPhone"
          type="tel"
          label="手机号"
          label-class="info-label"
          required
          placeholder="请输入手机号"
          maxlength="11"
          :rules="[
            { required: true },
            {
              pattern: /^1[3,5]{1}[0-9]{1}[0-9]{8}$/,
              message: '请输入正确手机号',
            },
          ]"
          @input="(v) => handleTelInput(v)"
        />
        <van-field
          name="patientName"
          v-model="patientName"
          label="姓名"
          label-class="info-label"
          required
          placeholder="请输入姓名"
          :rules="[{ required: true }]"
        />
        <van-field
          readonly
          clickable
          :value="sex.text"
          name="sex"
          @click="showSexModal = true"
          label-class="info-label"
          label="性别"
          required
          placeholder="请选择性别"
          right-icon="arrow"
          :rules="[{ required: true }]"
        />
        <van-popup v-model="showSexModal" position="bottom">
          <van-picker
            show-toolbar
            :columns="sexList"
            @confirm="handleSexConfirm"
            @cancel="showSexModal = false"
          />
        </van-popup>
        <van-field
          name="age"
          v-model="age"
          label-class="info-label"
          label="年龄"
          required
          type="digit"
          placeholder="请输入"
          :rules="[
            { required: true },
            { validator: (value) => value > 0, message: '年龄必须大于0' },
          ]"
        />
        <div :style="{ margin: '0.63rem 0' }">
          <van-field
            readonly
            clickable
            name="diseaseStaging"
            :value="diseaseStaging.text"
            @click="showPicker = true"
            label-class="info-label"
            label="疾病分期"
            placeholder="请选择"
            right-icon="arrow"
          />
          <van-popup v-model="showdiseaseStagingModal" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showdiseaseStagingModal = false"
            />
          </van-popup>
          <van-field
            name="courseOfTreatment"
            v-model="courseOfTreatment"
            label-class="info-label"
            type="digit"
            label="疗程"
            placeholder="请选择"
            :rules="[
              {
                validator: (value) => value && value > 0,
                message: '疗程必须大于0',
              },
            ]"
          />
          <van-field
            readonly
            clickable
            name="nextReviewTime"
            :value="nextReviewTime"
            @click="showCheckDate = true"
            label-class="info-label"
            label="下次复查时间"
            placeholder="请选择时间"
            right-icon="arrow"
          />
          <van-popup v-model="showCheckDate" position="bottom">
            <van-datetime-picker
              type="date"
              title="选择年月日"
              @confirm="handleCheckSelectConfirm"
              @cancel="showCheckDate = false"
            />
          </van-popup>
        </div>
        <div class="textarea-part">
          <div class="textarea-label">出院小结</div>
          <van-field
            name="dischargeSummary"
            v-model="dischargeSummary"
            type="textarea"
            rows="3"
            maxlength="200"
            show-word-limit
            placeholder="请输入"
          />
        </div>
        <div class="textarea-part" :style="{ margin: '0.63rem 0' }">
          <div class="textarea-label">备注</div>
          <van-field
            name="note"
            v-model="note"
            type="textarea"
            rows="3"
            maxlength="200"
            show-word-limit
            placeholder="请输入"
          />
        </div>
        <div class="footer">
          <van-button native-type="submit">确认</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, Picker, Field, Popup, Button } from "vant";
import moment from "moment";
import serve from "@/service/patientInfo";
@Component({
  components: {
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button,
  },
})
export default class PatientInfo extends Vue {
  public patientPhone: string;
  public patientName: string;
  public sex: any;
  public age: string;
  public diseaseStaging: any;
  public courseOfTreatment: string;
  public dischargeSummary: string;
  public note: string;
  public nextReviewTime: string;
  public showSexModal: boolean;
  public showdiseaseStagingModal: boolean;
  public showCheckDate: boolean;
  public showTelModal: boolean;
  public sexList: any[];
  // public telList: any[];
  constructor() {
    super();
    this.age = "";
    this.showSexModal = false;
    this.showdiseaseStagingModal = false;
    this.showCheckDate = false;
    this.showTelModal = false;
    this.sex = {};
    this.diseaseStaging = {};
    this.courseOfTreatment = "";
    this.patientPhone = "";
    this.patientName = "";
    this.dischargeSummary = "";
    this.note = "";
    this.nextReviewTime = "";
    this.sexList = [];
    // this.telList = [];
    // this.handleTelInput = debounce(this.handleTelInput, 1000);
  }
  columns = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
  onConfirm = () => {};
  public created() {
    serve.dictQuery({ type: "SEX" }).then((res: any) => {
      if (res.resultCode === 200) {
        this.sexList = res.data.dictList;
      }
    });
  }
  public handleTelInput(v: string) {
    if (v.length === 11) {
      serve
        .getPatientByTel({
          patientPhone: v,
        })
        .then((res: any) => {
          if (res.resultCode === 200) {
            const { data } = res;
            Object.keys(data).forEach((key: string) => {
              // @ts-ignore
              this[key] = data[key];
            });
            this.diseaseStaging = {
              text: data.diseaseStagingName,
              value: data.diseaseStagingId,
            };
            this.sex = { text: data.sexName, value: data.sex };
          }
        });
    }
  }
  public handleFormSubmit(values: any) {
    console.log(values);
    console.log(moment("2012-01-02").valueOf());
  }
  public handleSexConfirm(value: any) {
    this.sex = value;
    this.showSexModal = false;
  }
  public handleCheckSelectConfirm(value: any) {
    this.nextReviewTime = moment(value).format("YYYY-MM-DD");

    this.showCheckDate = false;
  }
  public handleTelSelect(value: any) {
    this.patientPhone = value.tel;
    this.sex = value.sex;
    this.age = value.age;
    this.diseaseStaging = value.diseaseStaging;
    this.patientName = value.name;
  }
}
</script>
<style lang="less">
@import url("./index.less");
</style>