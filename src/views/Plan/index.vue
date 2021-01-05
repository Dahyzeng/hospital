<template>
  <div class="plan">
    <img alt="Vue logo" src="../../assets/config1.png" />
    <van-form>
      <van-field label-class="plan-label" label="疾病分期" required/>
    </van-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {Form, Picker, Field, Popup, Button} from 'vant';
@Component({
  components: {
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Button.name]: Button
  }
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>