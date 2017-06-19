<template>
  <div class="add_user">
        <el-form :label-position="labelPosition" label-width="80px" :inline="true">
              <el-form-item 
                  v-for="item in addUser"
                  :key="item.key"
                  :label="item.label"
                   >
                <el-input :placeholder="item.placeholder"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
             </el-form-item>
        </el-form>
  </div>
</template>
<script>
export default {
 data() {
      return {
        labelPosition: 'top',
        addUser:[
        {
          label:'用户名',
          key:'user',
          placeholder:'输入用户名'

        },
        {
          label:'密码',
          key:'password',
          placeholder:'输入密码'

        },
        {
          key:'DanWname',
          label:'单位名称',
          placeholder:'输入单位名称'

        },
        {
          key:'people',
          label:'联系人',
          placeholder:'输入联系人'

        },
        {
          key:'DanWtype',
          label:'单位类型(0出版1发行2出版发行)',
          placeholder:'0'

        },
        {
          key:'ftpAddress',
          label:'ftp地址',
          placeholder:'输入ftp地址'
        },
        {
          key:'ftpName',
          label:'ftp用户名',
          placeholder:'输入ftp用户名'
        },
        {
          key:'ftpPassWord',
          label:'ftp密码',
          placeholder:'输入ftp密码'
        },
        {
          key:'miss',
          label:'组织机构代码',
          placeholder:''
        },
        {
          key:'number',
          label:'电话号码',
          placeholder:''
        },
        {
          key:'adress',
          label:'联系地址',
          placeholder:''
        },
        {
          key:'mail',
          label:'邮箱',
          placeholder:''
        },
         {
          key:'beizhu',
          label:'备注',
          placeholder:''
        },
        {
          key:'xfsdds',
          label:'奥示指数分类表',
          placeholder:'xfsdds'
        },
         {
          key:'jdhfs',
          label:'奥示指数商品信息表',
          placeholder:''
        },
        {
          key:'jdhfs',
          label:'奥示指数模块',
          placeholder:'all'
        },
      ]
      };
    },
 methods:{
    submitForm(ruleForm2) {
        alert("shu")
    },
    resetForm(ruleForm2) {
      alert("reset")
    }

 }
}

</script>
<style scoped lang="scss">
.add_user{
    margin-top:25px;
    .el-form{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        .el-form-item{
            width:30%;
            &:last-child{
                width: 100%;
                display:flex;
                justify-content:space-between;
            }
        }
    }
}
</style>
