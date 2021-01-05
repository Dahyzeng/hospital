import { Component, Vue } from "vue-property-decorator";
import "./layout.less";

@Component
export default class extends Vue {
  public get title() {
    return (this.$route.meta || {}).title;
  }

  public get left() {
    const Left = (this.$route.meta || {}).left;
    if (!Left) return;
    return <Left />;
  }

  public get right() {
    const Right = (this.$route.meta || {}).right;
    if (!Right) return;
    return <Right />;
  }

  public onClickLeft() {}

  public onClickRight() {}

  public render() {
    return (
      <section class="root">
        <header>
          <van-nav-bar
            title={this.title}
            left-text="返回"
            right-text="按钮"
            left-arrow
            onClickLeft={this.onClickLeft.bind(this)}
            onClickRight={this.onClickRight.bind(this)}
            scopedSlots={{
              left: () =>
                this.left || (
                  <van-icon class="left" name="arrow-left" size="18" />
                ),
              right: () => this.right || <div />
            }}
          ></van-nav-bar>
        </header>
        <section>
          <router-view />
        </section>
        <footer></footer>
      </section>
    );
  }
}
