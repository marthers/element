<template>
<div class="Informationlist">
  <div class="list_top"> 
       <span>系统列表</span>
       <el-button type="button" @click="addInformation = true">添加系统信息</el-button>
  </div>
  <el-dialog title="添加系统信息" custom-class="addMenu" size="tiny" :visible.sync="addInformation">
      <el-form :model="form" :label-position="labelPosition">
        <el-form-item 
          v-for="items in addSystem"
          :label="items.label"
          :key="items.key">
          <el-input 
           type="textarea"
           :rows="items.rows"
           :placeholder="items.placeholder"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addInformation = false">取消</el-button>
        <el-button type="primary" @click="submitForm">添加</el-button>
      </div>
  </el-dialog>
  <div class="table_bot">
      <el-table
          :data="tableData"
          border
          height="650"
          style="width: 100%">
          <el-table-column
            v-for="items in tableHead"
            :type="items.tp?items.tp:''"
            :prop="items.prop"
            :label="items.label"
            :key="items.prop"
            :width="items.width?items.width:''">
          </el-table-column>
          <el-table-column
              prop="operation"
              label="操作">
              <template scope="scope">
                 <el-button
                    size="small"
                    type="danger"
                    @click="Disable(scope.$index, scope.row)">删除</el-button>
                
              </template>
          </el-table-column> 
      </el-table>
  </div>
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
        labelPosition:'left',
        addInformation:false,
        form: {
          option: '全部'
        },
        addSystem:[
          {
            label:"系统名称",
            rows:1,
            key:1,
            placeholder:"输入功能名称"
          },
          {
            label:"描述",
            rows:5,
            key:2,
            placeholder:"请输入内容"
          }
        ],
        tableHead:[
          {
            tp:'index',
            prop:'index',
            // width:80
          },
          {
            label:'系统id',
            prop:'id',
            // width:200
          },
          {
            prop:'name',
            label:'系统名称',
            // width:300
          },
          {
            prop:'talk',
            label:'描述',
            // width:300

          },
          {
            prop:'time',
            label:'创建时间',
            // width:300
          }
        ],
        tableData:[
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },

          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
         {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          },
          {
            time:'2014/11/10 22:16:01',
            talk:'PMS权限管理系统',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            name:"ZQ.CN.PMS"
          }
        ],
        value1: '',
        value2: '',
      };
    },
  created () {
      //一开始请求数据
      console.log("创建")
      this.$http.post('http://200.1.3.106:9104/CnLog/List/Search',{
      }).then(data=>{
          console.log(data);
      });
  },
  methods:{
    submitForm(){
      console.log("提交操作");
    }
  }

  };
</script>
</script>

<style scoped lang="scss">
.Informationlist{
  padding: 30px 0 0 50px;
   .list_top{
    display:flex;
    justify-content:flex-start;
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb;
    .el-button{
        margin-left:2%;
    }
  }
  .table_bot{
    margin-top: 25px;
    height: 75%;
    overflow: hidden;
    border-bottom:1px solid #eef1f6;
  }


}

</style>
