<template>
  <header>
    <el-row>
      <el-col :span="12">
        <a href="javascript:;">
          <i class="icon_logo">&#xe61d;</i>
          <h3 class="head_tit">奥示数据管理系统</h3>
        </a>
      </el-col>
      <el-col :span="12" class="nav_right">
        <p class="account">
          <i class="icon_user">&#xe604;</i>
          <span class="user_detail">admin</span>
        </p>
        <a class="signOut" href="javascript:;">退出</a>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/default/_var.scss";

  header{
    width: 100%;
    padding: 0 20px;
    font: 24px/56px $ff_ms;
    color: $fc_fff;
    background-color: $nav_bg;
    .icon_logo{
      margin-right: 4px;
      color: $fc_fff;
    }
    .head_tit{
      display: inline-block;
      font: 24px $ff_ms;
      line-height: 56px;
      color: $fc_fff;
    }
    .nav_right{
      text-align: right;
    }
    .account{
      display: inline-block;
      font-size: 20px;
      margin-right: 20px;
      .icon_user{
        font-size: 30px;
      }
      .user_detail{
        display: inline-block;
      }
    }
    .signOut{
      display: inline-block;
      font: 22px/56px $ff_ms;
      color: $fc_fff;
    }
  }
</style>
