<template>
<div class="Informationlist">
  <div class="list_top"> 
       <span>工具列表</span>
        <el-button type="button" @click="addPermission = true">添加工具</el-button>
        <el-button type="button" @click="disPermission = true">工具分配</el-button>
  </div>
  <el-dialog title="添加客户端工具" custom-class="addMenu" size="tiny" :visible.sync="addPermission">
      <el-form :model="form" label-width="120px">
          <el-form-item 
            v-for="item in addPer"
            :key="item.key"
            :label="item.label">
            <el-input 
              v-model="item.model" 
              :placeholder="item.placeholder">
            </el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addPermission = false">退出</el-button>
        <el-button type="primary" @click="submitFormAdd">提交</el-button>
      </div>
  </el-dialog>
  <el-dialog title="添加用户工具权限" custom-class="addMenu" size="tiny" :visible.sync="disPermission">
      <el-form :model="form" label-width="120px" label-position="top">
          <el-form-item label="用户">
            <el-select v-model="form.system" placeholder="请选择">
              <el-option 
                  v-for="item in userName"
                  :label="item.label" 
                  :key="item.value"
                  :value="item.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工具">
          <el-checkbox-group v-model="form.type" >
            <el-checkbox 
                v-for="item in toolList"
                :key="item.name"
                :label="item.label"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="disPermission = false">退出</el-button>
        <el-button type="primary" @click="submitFormDis">提交</el-button>
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
            :key="items.prop"
            :type="items.tp?items.tp:''"
            :prop="items.prop"
            :label="items.label"
            :width="items.width?items.width:''">
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
        userTable:[
          {
            label:"gaojiaoshe",
            value:"1"
          },
          {
            label:"jiuzhouchubanshe",
            value:"2"
          },
          {
            label:"kexuechubanshe",
            value:"3"
          },
          {
            label:"zqzy",
            value:"4"
          },
          {
            label:"zhongnanchuanmei",
            value:"5"
          },
          {
            label:"fenghuangchuanmei",
            value:"6"
          },
          {
            label:"xinyujie",
            value:"7"
          },
          {
            label:"jiangongshe",
            value:"8"
          },
          {
            label:"assj",
            value:"9"
          },
          {
            label:"hnsfdxcbs",
            value:"10"
          },
          {
            label:"hnxhsd",
            value:"11"
          },

        ],
        labelPosition:'left',
        addPermission:false,
        disPermission:false,
        addPer:[
            {
              label:'注册表名称:',
              model:'',
              key:1,
              placeholder:'输入注册表名称'
            },
            {
              label:'描述:',
              model:'',
              key:2,
              placeholder:'输入描述'
            }
        ],
        userName:[
          {
            label:'dsfdfgdgd',
            value:'shanghai1'
          },
          {
            label:'dsfdfgdgd',
            value:'shanghai2'
          },
          {
            label:'dsfdfgdgd',
            value:'shanghai3'
          },
          {
            label:'dsfdfgdgd',
            value:'shanghai4'
          },
          {
            label:'dsfdfgdgd',
            value:'shanghai5'
          }
        ],
        toolList:[
          {
            label:'cnon发行工具',
            name:'type'
          },
          {
            label:'cnon出版工具',
            name:'type'
          },
          {
            label:'cnon发行交易',
            name:'type'
          },
          {
            label:'cnon出版交易',
            name:'type'
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
            prop:'name'
          },
          {
            prop:'talk',
            label:'描述',
            // width:200
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
            label:'创建时间'
          }
        ],
        form: {
          option:'全部',
          system:'请选择',
          type:[]
        },
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
    submitFormAdd(){
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
  .el-select{
      width:100%;
    }

}
</style>
