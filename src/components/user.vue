<template>
  <div class="user_wrap">
      <div class="user_top">
        <span>用户列表</span>
        <el-button  @click="$router.push({name: 'addUser'})">添加用户</el-button>
        <el-button  @click="$router.push({name:'addFtp'})">添加FTP</el-button>
      </div>
      <router-view></router-view>  
  </div>
</template>
<script>


export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user_wrap{
  padding: 30px 0 0 50px;
  .user_top{
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb;
    .el-button{
      width: 82px;
      height: 35px;
      margin-left: 5%;
    }
  }
}

</style>
