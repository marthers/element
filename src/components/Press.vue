<template>
<div class="Press">
  <div class="Press_top">
      <span>出版社</span> 
      <el-form>
        <el-form-item>
          <el-input  placeholder="出版社"></el-input>
        </el-form-item>
      </el-form>
      <el-form class="Press_log">
      <el-button type="primary">搜索</el-button>
      </el-form>
       <el-button type="button" class="button"@click="press= true">添加出版社</el-button>
  </div>
  <el-dialog title="添加修改出版社" custom-class="addMenu" size="tiny" :visible.sync="press">
      <el-form :model="form" label-width="120px">
          <el-form-item 
              v-for="items in addPress"
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
        <el-button @click="press = false">退出</el-button>
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
             width="230">
            <template scope="scope">
               <el-button
                  size="small"
                  type="danger"
                  @click="Disable(scope.$index, scope.row)">禁用</el-button>
                <el-button
                  size="small"
                  type="success"
                  @click="Disable(scope.$index, scope.row)">更新</el-button>
                <el-button
                  size="small"
                  type="success"
                  @click="Disable(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column> 
     </el-table>
  </div>
 
<!--   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
  </el-pagination> -->
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
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120',
            action:'解析书目信息/SubmitBookInfo'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },

          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            icon:'错误日志',
            name:'全国出版物发行标准委员会',
            dress:'企业用户',
            quan:'曽文学',
            time:'2015/8/12 19:18:15',
            des:'76F99F9FDA74EAD1',
            id:'120'
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
            label:'图标',
            prop:'icon'
          },
          {
            prop:'name',
            label:'出版社名称'
          },
          {
            prop:'des',
            label:'描述',
            // width:300

          },
          {
            prop:'dress',
            label:'链接地址'

          },
          {
            prop:'quan',
            label:'权重'
          }
        ],
        addPress:[
          {
            label:'出版社名称:',
            model:'全部',
            key:1,
            placeholder:'',
            select:true
          },
          {
            label:'链接地址:',
            key:3,
            placeholder:'',
            select:true
          },
          {
            label:'描述：',
            key:4,
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
            label:'图标地址:',
            key:5,
            placeholder:'',
            select:false
          },
           
        ],
        press:false,
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
    height: 80%;
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
