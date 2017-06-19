<template>
<div class="LogMassage">
  <div class="Log_top"> 
      <span>节点：</span>
      <el-form >
        <el-form-item >
          <el-select placeholder="选择节点" v-model="form.option">
            <el-option 
              v-for="items in logType"
              :key="items.value"
              :label="items.label" 
              :value="items.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form class="log">
      <el-form-item>
        <el-button type="primary">选择</el-button>
        </el-form-item>
      </el-form>
      <el-button type="button" @click="template = true">添加模板节点</el-button>
  </div>
  <el-dialog title="添加权限信息" custom-class="addMenu" size="tiny" :visible.sync="template">
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
            <el-radio-group 
                v-else-if="items.group"
                v-model="items.model">
              <el-radio 
                v-for="radio in items.radio"
                :key="radio.label"
                :label="radio.label">{{radio.html}}</el-radio>
            </el-radio-group>
            <el-input
              v-else 
              :placeholder="items.placeholder">
            </el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="template = false">取消</el-button>
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
          :width="items.width?items.width:''"
          :key="items.prop"
          :prop="items.prop"
          :label="items.label"
          >
        </el-table-column>
        <el-table-column
            prop="operation"
            label="操作"
            fixed="right"
             width="160">
            <template scope="scope">
                <el-button
                  size="small"
                  type="success"
                  @click="edit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                  size="small"
                  type="danger"
                  @click="jin(scope.$index, scope.row)">禁用</el-button>
            </template>
          </el-table-column> 
    </el-table>
  </div>
  
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
  </el-pagination>
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
        form: {
          option: ''
        },
        addPos:[
          {
            label:'上级节点:',
            model:'请选择节点',
            placeholder:'',
            key:2,
            select:true,
            option:[
              {
                label:'根节点',
                value:'pms'
              },
              {
                label:'附属细节复合元素',
                value:'cn'
              },
              {
                label:'文本内容复合元素',
                value:'cn'
              }
            ]
          },
          {
            label:'节点名称:',
            model:'全部',
            key:1,
            placeholder:'输入节点名称',
          },
          {
            label:'节点代码:',
            key:3,
            placeholder:'输入节点代码',
          },
          {
            label:'节点描述:',
            key:4,
            placeholder:'输入节点描述',
          },
          {
            label:'节点XML:',
            key:5,
            placeholder:'输入节点XML',
          },
          {
            label:'节点CodeXML:',
            key:6,
            placeholder:'输入节点CodeXML',
          },
          {
            label:'是否为菜单节点:',
            key:6,
            group:true,
            model:0,
            placeholder:'输入节点CodeXML',
            radio:[
              {
                label:0,
                html:'否'
              },
              {
                label:1,
                html:'是'
              },
            ]

          }
        ],
        template:false,
        tableData:[
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            action:'解析书目信息/SubmitBookInfo'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },

          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            updateTime:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
        ],
        logType:[
            {
              label:'文本内容复合元素',
              value:'operation'
            },
            {
              label:'根节点',
              value:'error'
            },
            {
              label:'附属细节复合元素',
              value:'system'
            },
            {
              label:'文本内容复合元素',
              value:'text'
            }
        ],
        tableHead:[
          {
            tp:'index',
            prop:'index',
            // width:80
          },
          {
            label:'节点深度',
            prop:'comment'
          },
          {
            prop:'op',
            label:'父节点'
          },
          {
            prop:'节点名称',
            label:'动作',
            // width:300

          },
          {
            prop:'result',
            label:'节点代码'

          },
          {
            prop:'ip',
            label:'节点XML名称'

          },
          {
            prop:'talk',
            label:'节点描述'

          },
          {
            prop:'createTime',
            label:'创建时间'

          },
          {
            prop:'updateTime',
            label:'更新时间'
          },
          {
            prop:'createPeople',
            label:'创建人'
          },
          {
            prop:'updataPeople',
            label:'更新时间'
          }
        ],
        value1: 0,
        value2: '',
        currentPage:1
      };
    },
   created () {
      console.log("创建")
      this.$http.post('http://200.1.3.106:9104/CnLog/List/Search',{
      }).then(data=>{
          console.log(data);
      });
    },
    methods: {
      handleSizeChange(val) {
        console.log("页码大小改变时处理的事件")
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log("当前页发生改变时处理的事件")
        console.log(`当前页: ${val}`);
      },
      submitForm(){
        alert("添加节点提交")
      }
    }
  };
</script>
</script>

<style scoped lang="scss">
.LogMassage{
  padding: 30px 0 0 50px;
   .Log_top{
    display:flex;
    justify-content:flex-start;
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb; 
    .log,.el-button{
      margin-left:2%;
    }
  }
  .table_bot{
    height: 70%;
    overflow:hidden;
    margin-top:25px;
    border-bottom:1px solid #eef1f6;
  }
  
  .el-pagination{
    float:right;
    margin:10px;
  }
}

</style>
