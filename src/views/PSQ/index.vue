<template>
  <div class="psq">
    <header>
      <img alt="Vue logo" src="../../assets/symptom.png" />
    </header>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in symptonList"
          clickable
          :key="item"
          :title="`${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox
              :name="item"
              ref="checkboxes"
              checked-color="#28D190"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <div class="footer">
      <van-button>发布</van-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Checkbox, CheckboxGroup, Button } from "vant";
@Component({
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
})
export default class Home extends Vue {
  symptonList = [
    "呕吐、反胃",
    "腹泻",
    "感觉乏力、疲惫",
    "出现皮疹",
    "发热",
    "身体疼痛",
    "体重变化",
  ];
  result = [];
  public toggle(index: number) {
    // @ts-ignore
    this.$refs.checkboxes[index].toggle();
  }
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>;
