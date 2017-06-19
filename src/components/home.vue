<template>
  <div class="home_wrap">
    <h3 class="message">
      <span>您上次登录的时间：</span>
      <time>{{ now }}</time>
      <span>（不是您登录的？<a href="javascript:;">请点这里）</a></span>
    </h3>
    <section class="card_body">
      <dl v-for="(item, index) in 6">
        <dt><img :src="pics[index]"></dt>
        <dd>{{ txt[index] }}</dd>
      </dl>
    </section>
    <div class="btn_group">
      <el-button type="primary">添加新的快捷功能</el-button>
    </div>
  </div>
</template>
<script>
import {getTime} from '../scripts/utils'
import img1 from '../assets/icon-3.png'
import img2 from '../assets/icon-4.png'
import img3 from '../assets/icon-5.png'
import img4 from '../assets/icon-6.png'
import img5 from '../assets/icon-7.png'
import img6 from '../assets/icon-8.png'

export default {
  name: 'home',
  data () {
    return {
      pics: [img1, img2, img3, img4, img5, img6],
      txt: ['管理设置', '管理设置', '管理设置', '管理设置', '管理设置', '管理设置'],
      now: getTime('YYYY-MM-DD', new Date())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/default/_var.scss";

.home_wrap {
  .message {
    padding: 30px 0 0 30px;
  }
  .card_body {
    padding: 10px 0;
    margin-top: 50px;
    dl {
      display: inline-block;
      width: 100px;
      height: 100px;
      text-align: center;
      padding: 10px;
      border: 1px solid $bdc_d3;
      margin-right: 3%;
      background-color: $card_bg;
      border-radius: 4px;
    }
  }
  .btn_group{
    margin-top: 60px;
  }
}

</style>
