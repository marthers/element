<template>
  <div class="menu_wrap">
    <!--导航条-->
    <div class="menu_top">
      <span>所属系统：</span>
      <el-select v-model="value" no-data-text="PMS权限管理系统" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="btn_add"  @click="dialogFormVisible = true">添加菜单</el-button>

      <el-dialog title="添加菜单" custom-class="addMenu" size="tiny" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-width="120px">
          <el-form-item 
            v-for="items in addMenu"
            :key="items.key"
            :label="items.label">
            <el-select 
                v-if="items.select"
                v-model="items.model" 
                :placeholder="items.placeholder">
              <el-option 
                  v-for="option in items.option"
                  :key="option.value"
                  :label="option.label" 
                  :value="option.value"></el-option>
            </el-select>
             <el-radio-group 
                v-else-if="items.group"
                v-model="items.model">
              <el-radio 
                v-for="radio in items.radio"
                :key="radio.label"
                :label="radio.label">否</el-radio>
            </el-radio-group>
            <el-input 
                v-else
                v-model="items.model" 
                :auto-complete="items.placeholder"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">添加</el-button>
        </div>
      </el-dialog>
    </div>
    <!--表格详情-->
    <div class="menu_bot">
      <el-table
        :data="tableData"
        border
        max-height="760"
        style="width: 100%">
        <!--隐藏的具体项-->
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item
              v-for="(subItem, index) in formParams"
              :key="subItem.prop"
              :label="subItem.label">
                <span>{{ props.row[subItem.prop] }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <!--表单字段-->
        <template>
          <el-table-column
            v-for="(item, index) in formParams"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :width="item.width ? item.width : ''"
            :show-overflow-tooltip="item.isOverflow ? true : false">
          </el-table-column>
        </template>
        <!--表单按钮部分不做封装处理-->
        <el-table-column label="操作" width="90">
          <template scope="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 'PMS权限管理系统',
        options: [{
          value: '选项一',
          label: 'PMS权限管理系统'
          },{
          value: '选项二',
          label: '6y6ytu'
        }],
        dialogFormVisible: false,
        formParams: [
          {
            prop: 'index',
            label: '#',
            // width: 100
          },
          {
            prop: 'name',
            label: '菜单名称',
            // width: 200,
            isOverflow: true
          },{
            prop: 'system',
            label: '系统名称',
            isOverflow: true
          },{
            prop: 'url',
            label: 'URL路径'
          },{
            prop: 'level',
            label: '菜单级别',
            // width: 100
          }
        ],
        form: {
          system: 'PMS权限管理系统',
          name: '',
          des: '',
          url: '',
          superior: '无上级菜单',
          superiorArr: [
            
          ],
          formLabelWidth: '120px',
          isMenu: 0
        },
        addMenu:[
            {
              label:'所属系统：',
              select:true,
              model:'PMS权限管理系统',
              placeholder:'',
              key:1,
              option:[
                  {
                      label:'PMS权限管理系统',
                      pms:'pms'
                  }
              ]
            },
            {
              label:'菜单名称：',
              model:'',
              placeholder:'off',
              key:1
            },
            {
              label:'菜单描述：',
              model:'',
              placeholder:'off',
              key:1
            },
            {
              label:'权限路径URL：',
              model:'',
              placeholder:'off',
              key:1
            },
            {
              label:'上级菜单：',
              select:true,
              model:'无上级菜单',
              placeholder:'',
              key:1,
              option:[
                  {
                    label:'无上级菜单',
                    pms:'1'
                  },
                  {
                    label:'菜单管理',
                    pms:'2'
                  },
                  {
                    label:'角色管理',
                    pms:'3'
                  },
                  {
                    label:'用户管理',
                    pms:'4'
                  },
                  {
                    label:'系统管理',
                    pms:'5'
                  },
                  {
                    label:'权限管理',
                    pms:'6'
                  },
                  {
                    label:'新闻管理',
                    pms:'7'
                  },
                  {
                    label:'热词管理',
                    pms:'8'
                  },

                  {
                    label:'模版管理',
                    pms:'9'
                  },
                  {
                    label:'图片管理',
                    pms:'10'
                  },
                  {
                    label:'操作管理',
                    pms:'11'
                  },
                  {
                    label:'图书管理',
                    pms:'12'
                  },
                  {
                    label:'审核管理',
                    pms:'13'
                  }   
              ]
            },
            {
              label:'是否菜单节点:',
              group:true,
              model:0,
              placeholder:'',
              key:1,
              radio:[
                  {
                    html:'否',
                    label:0
                  },
                  {
                    html:'是',
                    label:1
                  } 
              ]
            },

        ],
        tableData: [
            {
              index: 1,
              name: '王小虎王小虎王小虎王小虎王小虎王小虎',
              system: '上海市普陀区金沙江路 1518 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 2,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1517 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 3,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1519 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 4,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 5,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 6,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 7,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 8,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 9,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 10,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 11,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 12,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 13,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 14,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 15,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 16,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 17,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 18,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 19,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }, {
              index: 20,
              name: '王小虎',
              system: '上海市普陀区金沙江路 1516 弄',
              url: '/Menu/Menu/List',
              level: 1
            }
        ]
      }
    },
    methods: {
      submitForm () {
        alert('处理逻辑后执行隐藏操作')
        this.dialogFormVisible = false
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.tableData.splice(index, 1);
        console.log(index, row);
      },
      formatter(row, column) {
        return row.system.length > 10 ? (row.system.slice(0, 8) + '...') : row.system;
      }
    }
  }
</script>

<style lang="scss">
  .addMenu{
    .el-form-item__content{
      .el-input{
        width: 70%;
      }
    }
    .el-select{
      .el-input{
        width: auto;
      }
    }
  }
  .menu_top{
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb;
    .btn_add{
      margin-left: 15px;
    }
  }
  .menu_bot{
      height: 80%;
      overflow: hidden;
      margin-top:25px;
      border-bottom:1px solid #eef1f6;
  }

  // 表格样式
  .demo-table-expand {
    font-size: 0;
  }
  .el-table__body-wrapper{
    overflow-x:hidden;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
