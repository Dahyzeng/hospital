<template>
    <div class="base-info">
        <van-form>
            <div class="height10"/>
            <van-field class="avatar" name="uploader" label="头像">
                <template #input>
                    <img src="../../assets/avtar.png"/>
                </template>
            </van-field>
            <div class="height10"/>
            <div class="content-bottom">
                <van-field
                        name="姓名"
                        :value="value"
                        label="姓名"
                />
                <van-field
                        name="手机号码"
                        :value="value"
                        label="手机号码"
                />
                <van-field
                        name="医院"
                        :value="value"
                        label="医院"
                />
                <van-field
                        name="科室"
                        :value="value"
                        label="科室"
                />
            </div>
        </van-form>
        <div>
            <a class="login-out">退出登录</a>
        </div>
        <div class="footer">
            <van-button round type="info" size="large">保存</van-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Button, Field, Form, Picker, Popup} from "vant";

    @Component({
        components: {
            [Form.name]: Form,
            [Picker.name]: Picker,
            [Field.name]: Field,
            [Popup.name]: Popup,
            [Button.name]: Button,
        },
    })
    export default class BaseInfo extends Vue {
        showPicker = false;
        columns = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
        value = "";
        onConfirm = () => {
            this.showPicker = true;
        };
    }
</script>
<style lang="less">
    @import url("./base-info.less");
</style>