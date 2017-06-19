<template>
<div class="Informationlist">
  <div class="list_top"> 
       <span>权限功能列表 </span>
        <el-button type="button" @click="permission = true">权限添加</el-button>
  </div>
  <el-dialog title="添加权限信息" custom-class="addMenu" size="tiny" :visible.sync="permission">
      <el-form :model="form" label-width="120px">
          <el-form-item 
              v-for="items in addPos"
              :key="items.key"
              :label="items.label"
              >
            <el-select 
              v-if="items.select"
              v-model="items.model"
              :placeholder="items.placeholder">
                  <el-option 
                    v-for="option in items.option"
                    :key="option.value"
                    :label="option.label" 
                    :value="option.value">
                  </el-option>
            </el-select>
            <el-input
              v-else 
              :placeholder="items.placeholder">
            </el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="permission = false">退出</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </div>
  </el-dialog>
  <div class="table_bot">
      <el-table
        :data="tableData"
        border
        height="650"
        style="width: 100%">
        <el-table-column
          v-for="item in tableHead"
          :type="item.tp?item.tp:''"
          :width="item.width?item.width:''"
          :prop="item.prop"
          :key="item.prop"
          :label="item.label">
        </el-table-column>
        <el-table-column
            prop="operation"
            label="操作">
            <template scope="scope">
               <el-button
                  size="small"
                  type="danger"
                  @click="Disable(scope.$index, scope.row)">禁用</el-button>
              
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
        permission:false,
        addPos:[
          {
            label:'输入功能系统:',
            model:'全部',
            key:1,
            placeholder:'输入功能名称',
            select:false
          },
          {
            label:'系统:',
            model:'请选择',
            placeholder:'',
            key:2,
            select:true,
            option:[
              {
                label:'ZQ.CN.PMS',
                value:'pms'
              },
              {
                label:'cn加工平台',
                value:'cn'
              }
            ]
          },
          {
            label:'URL路径:',
            key:3,
            placeholder:'输入URL',
            select:false
          },
          {
            label:'区域（AREA）:',
            key:4,
            placeholder:'输入区域',
            select:false
          },
          {
            label:'controller:',
            key:5,
            placeholder:'输入联系地址',
            select:false
          },
           {
            label:'ACTION:',
            key:6,
            placeholder:'输入联系地址',
            select:false
          }
        ],
        tableHead:[
          {
            tp:'index',
            prop:'index',
            // width:80
          },
          {
            label:'功能名称',
            prop:'name',
            // width:200
          },
          {
            prop:'talk',
            label:'描述',
            // width:300
          },
          {
            prop:'sys',
            label:'所属系统',
            // width:300

          },
          {
            prop:'url',
            label:'URL',
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
     height: 80%;
    overflow:hidden;
    margin-top:25px;
    border-bottom:1px solid #eef1f6;
  }
}

</style>
