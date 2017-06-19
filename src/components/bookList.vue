{<template>
<div class="book">
  <div class="Log_top"> 
      <span>搜索类型:</span>
      <el-form class="log">
        <el-form-item>
          <el-select v-model="form.option">
            <el-option 
              v-for="items in logType"
              :key="items.value"
              :label="items.label" 
              :value="items.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span class="span">搜索内容:</span>
      <el-form>
        <el-form-item>
          <el-input  placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <el-form class="log">
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
  </div>
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
             width="80">
            <template scope="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="lun(scope.$index, scope.row)">下架</el-button>
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
          option: '请选择'
        },
        tableData:[
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120',
            action:'解析书目信息/SubmitBookInfo'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },

          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
          {
            type:'错误日志',
            comment:'企业管理员',
            result:'企业用户',
            op:'曽文学',
            time:'2015/8/12 19:18:15',
            ip:'76F99F9FDA74EAD1',
            id:'120'
          },
        ],
        logType:[
            // {
            //   label:'全部',
            //   value:'all'
            // },
            {
              label:'ISBN',
              value:'ISBN'
            },
            {
              label:'作者',
              value:'author'
            },
            {
              label:'书名',
              value:'bookName'
            },
            {
              label:'出版社',
              value:'dress'
            }
        ],
        tableHead:[
          {
            tp:'index',
            prop:'index',
            // width:80
          },
          {
            label:'ISBN',
            prop:'comment'
          },
          {
            prop:'op',
            label:'书名'
          },
          {
            prop:'action',
            label:'作者',
            // width:300

          },
          {
            prop:'result',
            label:'出版社'

          }
        ],
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
      }
    }
  };
</script>
</script>

<style scoped lang="scss">
.book{
  padding: 30px 0 0 50px;
   .Log_top{
      display:flex;
      justify-content:flex-start;
      padding:10px 20px ;
      height:55px;
      line-height: 34px;
      background:#dbdbdb; 
      .log{
        margin-left:1%;
      }
  }
  .span{
    margin:0 1% 0 1%;
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
}