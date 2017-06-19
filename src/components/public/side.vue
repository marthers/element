<template>
  <div class="side_wrap">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="0" class="side_tit" @click="$router.push({ name: 'Home'})"><i class="icon_home">&#xe632;</i>后台首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="icon_menu">&#xe693;</i>菜单管理</template>
            <el-menu-item index="1-1" @click="$router.push({name: 'Menu'})">菜单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="icon_character">&#xe646;</i>角色管理</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'Character'})">角色列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="icon_account">&#xe62e;</i>用户管理</template>
            <el-menu-item index="3-1" @click="$router.push({name: 'User'})">用户列表</el-menu-item>
            <el-menu-item index="3-2" @click="$router.push({name: 'UserOnLine'})">用户在线列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="icon_system">&#xe651;</i>系统管理</template>
            <el-menu-item index="4-1" @click="$router.push({name: 'LogMassage'})">日志管理</el-menu-item>
            <el-menu-item index="4-2"  @click="$router.push({name: 'Informationlist'})">系统信息列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="icon_authority">&#xe631;</i>权限管理</template>
            <el-menu-item index="5-1"  @click="$router.push({name: 'Permission'})">权限功能列表</el-menu-item>
            <el-menu-item index="5-2"  @click="$router.push({name: 'tool'})">工具列表</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="icon_press">&#xe600;</i>出版社管理</template>
            <el-menu-item index="6-1" @click="$router.push({name: 'Press'})">出版社管理列表</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="icon_news">&#xe679;</i>新闻管理</template>
            <el-menu-item index="7-1"  @click="$router.push({name: 'newList'})">新闻管理列表</el-menu-item>
            <el-menu-item index="7-2"  @click="$router.push({name: 'picList'})">图片轮转列表</el-menu-item>
            <el-menu-item index="7-3"  @click="$router.push({name: 'initList'})">初始化显示列表</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="icon_hot">&#xe63b;</i>热词管理</template>
            <el-menu-item index="8-1" @click="$router.push({name: 'Word'})">热词列表</el-menu-item>
            <el-menu-item index="8-2" @click="$router.push({name: 'wordList'})">热词首页列表</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title"><i class="icon_modele">&#xe695;</i>模版管理</template>
            <el-menu-item index="9-1" @click="$router.push({name: 'Template'})" >CN标准模版</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title"><i class="icon_pic">&#xe6b5;</i>图片管理</template>
            <el-menu-item index="10-1"  @click="$router.push({name: 'picMessage'})">图片下载</el-menu-item>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title"><i class="icon_operate">&#xe662;</i>操作管理</template>
            <el-menu-item index="11-1" @click="$router.push({name: 'actionlist'})">操作列表</el-menu-item>
          </el-submenu>
          <el-submenu index="12">
            <template slot="title"><i class="icon_book">&#xe734;</i>图书管理</template>
            <el-menu-item index="12-1" @click="$router.push({name: 'bookList'})" >图书列表页</el-menu-item>
          </el-submenu>
          <el-submenu index="13">
            <template slot="title"><i class="icon_check">&#xe62d;</i>审核管理</template>
            <el-menu-item index="13-1" @click="$router.push({name: 'Jurisdiction'})">审核权限分配</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {}
  }
</script>

<style lang="scss">
@import "../../style/default/_var.scss";
.side_wrap{
  position: absolute;
  top: 56px;
  left: 0;
  width: 230px;
  max-height: calc(100% - 56px);
  background-color: $side_bg;
  overflow: hidden;
  overflow-y: auto;
  [class^="icon_"]{
    display: inline-block;
    width: 28px;
  }
}
.side_tit{
  display: inline-block;
  width: 100%;
  padding-left: 20px;
  font: 14px/50px $ff_ms;
  color: $fc_333;
  background-color: $homeItem_bg;
}
</style>
