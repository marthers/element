<template>
<div class="Press">
  <div class="Press_top">
      <span>区域:</span> 
      <el-form>
        <el-form-item>
          <el-input  placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <span class="span">控制:</span> 
      <el-form>
        <el-form-item>
          <el-input  placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <span class="span">动作:</span> 
      <el-form>
        <el-form-item>
          <el-input  placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <el-form class="Press_log">
      <el-button type="primary">搜索</el-button>
      </el-form>
       <el-button type="button" class="button"@click="action= true">添加操作</el-button>
  </div>
  <el-dialog title="添加操作" custom-class="addMenu" size="tiny" :visible.sync="action">
      <el-form :model="form" label-width="120px">
          <el-form-item 
              v-for="items in addaction"
              :key="items.key"
              :label="items.label"
              >
            <el-input
               v-if="items.select"
              :placeholder="items.placeholder">
            </el-input>
            <el-upload
                v-else
                class="upload-demo"
                ref="upload"
                action="#"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
          </el-upload>
          </el-form-item>
        </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="action = false">退出</el-button>
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
             width="200">
            <template scope="scope">
               <el-button
                  size="small"
                  type="danger"
                  @click="remove(scope.$index, scope.row)">删除</el-button>
                <el-button
                  size="small"
                  type="success"
                  @click="lun(scope.$index, scope.row)">启用</el-button>
                  <el-button
                  size="small"
                  type="success"
                  @click="edit(scope.$index, scope.row)">编辑</el-button>
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
          option: '全部'
        },
        tableData:[
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            id:'120',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },

          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
          {
            icon:'http://200.1.3.106:9104/Content/image/9068944_123518510114_2.jpg',
            name:'全国出版物发行标准委员会',
            region:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            control:'76F99F9FDA74EAD1',
            pirce:'120'
          },
        ],
        logType:[
            {
              label:'全部',
              value:'all'
            },
            {
              label:'操作日志',
              value:'operation'
            },
            {
              label:'错误日志',
              value:'error'
            },
            {
              label:'系统日志',
              value:'system'
            }
        ],
        tableHead:[
          {
            tp:'index',
            prop:'index',
            width:80
          },
          {
            label:'区域',
            prop:'region'
          },
          {
            prop:'control',
            label:'控制'
          },
          {
            prop:'action',
            label:'动作',
            // width:300

          },
          {
            prop:'pirce',
            label:'价格'

          },
          {
            prop:'talk',
            label:'动作描述'

          },
          {
            prop:'quan',
            label:'权重'

          }
          
        ],
        addaction:[
          {
            label:'区域:',
            model:'',
            key:1,
            placeholder:'',
            select:true
          },
          {
            label:'控制:',
            key:3,
            placeholder:'',
            select:true
          },
          {
            label:'动作',
            key:4,
            placeholder:'',
            select:true
          },
          {
            label:'价格',
            key:4,
            placeholder:'0',
            select:true
          },
          {
            label:'动作描述:',
            key:5,
            placeholder:'',
            select:true
          },
          {
            label:'权重:',
            key:5,
            placeholder:'0',
            select:true
          },
          {
            label:'状态:',
            key:5,
            placeholder:'0',
            select:true
          }
           
        ],
        action:false,
        value1: '',
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
          this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }

    }
  };
</script>
</script>

<style scoped lang="scss">
.Press{
  padding: 30px 0 0 50px;
   .Press_top{
    display:flex;
    justify-content:flex-start;
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb;
    .span{
      margin-left:1%;
    }
    .el-form{
      margin-left:1%;
    }
    .Press_log{
      margin-left:2%;
    }
    .button{
      margin-left:2%;
    }
  }
  .table_bot{
    height: 70%;
    overflow:hidden;
    margin-top:25px;
    border-bottom:1px solid #eef1f6;
    .el-table{
      .cell{
        img{
          width:50px;
          height:50px;
        }
      }
    }
  }
  
  .el-pagination{
    float:right;
    margin:10px;
  }
}

</style>
