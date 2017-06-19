<template>
<div class="LogMassage">
  <div class="Log_top"> 
      <el-form>
        <el-form-item>
          <el-input  placeholder="操作人"></el-input>
        </el-form-item>
      </el-form>
      <el-date-picker
        class="log"
        v-model="value1"
        type="datetime"
        align="left"
        placeholder="开始日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
      <el-date-picker
        v-model="value2"
        class="log"
        type="datetime"
        align="left"
        placeholder="结束日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
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
            // width:80
          },
          {
            label:'内容',
            prop:'comment'
          },
          {
            prop:'op',
            label:'操作人'
          },
          {
            prop:'action',
            label:'动作',
            // width:300

          },
          {
            prop:'result',
            label:'结果'

          },
          {
            prop:'ip',
            label:'IP'

          },
          {
            prop:'time',
            label:'创建时间'
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
.LogMassage{
  padding: 30px 0 0 50px;
   .Log_top{
    display:flex;
    justify-content:flex-start;
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb; 
    .log{
      margin-left:2%;
    }
  }
  .table_bot{
    margin-top: 25px;
    height: 70%;
    overflow: hidden;
    border-bottom:1px solid #eef1f6;
    .el-table{
     .el-table__header-wrapper{
      }
    }

  }
  .el-pagination{
    float:right;
    margin:10px;
  }
}

</style>
