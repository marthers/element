<template>
<div class="book">
  <div class="Log_top"> 
     审核添加修改
  </div>

 <el-form  class="demo-form-inline" label-position="top">
  <el-form-item 
    v-for="items in logType"
    :key="items.value"
    :label="items.label"
    >
    <el-select
      v-if="items.select" 
      v-model="items.modle" >
      <el-option 
            v-for="option in items.option"
            :key="option.value"
            :label="option.label" 
            :value="option.value"></el-option>
    </el-select>
    <el-checkbox-group 
        v-if="items.group"
        v-model="items.modle">
      <el-checkbox 
          v-for="checkbox in items.checkbox"
          :key="checkbox.name"
          :label="checkbox.label" 
          :name="checkbox.name"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item class="button">
        <el-button  type="primary">提交</el-button>
        </el-form-item>
 </el-form>
    

</el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        form:{
          option: '请选择',
          type:[]
        },
        logType:[
            {
              label:'角色:',
              value:'juese',
              modle:"请选择",
              select:true,
              option:[
                {
                  label:"企业管理员",
                  value:"1"
                },
                {
                  label:"博士",
                  value:"2"
                },
                {
                  label:"普通用户",
                  value:"3"
                },
                {
                  label:"管理员",
                  value:"4"
                }
              ]

            },
            {
              label:'审核词条',
              value:'word',
              modle:[],
              group:true,
              checkbox:[
                {
                  label:"内容受众对象",
                  name:"con"
                },
                {
                  label:"描述",
                  name:"talk"
                },
                {
                  label:"目录",
                  name:"menu"
                },
                {
                  label:"书评引文",
                  name:"ping"
                },
                {
                  label:"大字标题",
                  name:"title"
                },
                {
                  label:"出版说明",
                  name:"chu"
                },
                {
                  label:"内容推荐",
                  name:"nei"
                },
                {
                  label:"编辑推荐",
                  name:"edit"
                },


                 {
                  label:"在线试读部分章节",
                  name:"online"
                },
                {
                  label:"作者简介",
                  name:"author"
                },
                {
                  label:"媒体评论",
                  name:"meiti"
                }
              ]
            }
            
        ],
        value1: '',
        value2: '',
        currentPage:1
      };
    }
  };
</script>
</script>

<style scoped lang="scss">
.book{
  padding: 30px 0 0 50px;
   .Log_top{
      display:flex;
      margin-bottom:25px;
      justify-content:flex-start;
      padding:10px 20px ;
      height:55px;
      line-height: 34px;
      background:#dbdbdb; 
      .log{
        margin-left:1%;
      }
  }
  .el-select{
    width:30%;
  }
  .el-checkbox{
    margin-left:0px;
    width:20%;
  }
  .button{
    display:flex;
    justify-content:center;
    margin-top:25px;
  }

}

</style>
