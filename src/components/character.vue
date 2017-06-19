<template>
  <div class="character_wrap">
    <!--导航条-->
    <div class="character_top">
      <el-button class="btn_add" type="primary" @click="dialogFormVisible = true">创建角色</el-button>
      <!--对话框组件-->
      <el-dialog title="创建角色" custom-class="addMenu" size="tiny" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-width="120px">
          <el-form-item label="角色名称：">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="角色类别：">
            <el-radio-group v-model="form.sort">
              <el-radio :label="0">管理员</el-radio>
              <el-radio :label="1">普通用户</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="角色等级：">
            <el-input v-model="form.level" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="下载条数：">
            <el-input v-model="form.count" auto-complete="off" placeholder="输入0不限制下载条数"></el-input>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">添加</el-button>
        </div>
      </el-dialog>
    </div>
    <!--表格内容-->
    <div class="character_bot">
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
            label="操作"
            width="150">
            <template scope="scope">
               <el-button
                  size="small"
                  type="danger"
                  @click="Disable(scope.$index, scope.row)">注销</el-button>
                <el-button
                  size="small"
                  type="success"
                  @click="edit(scope.$index, scope.row)">编辑</el-button>
              
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
        dialogFormVisible: false,
        form: {
          name: '',
          sort: 0,
          level: '',
          count: '',
          desc: ''
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
       tableHead:[
          {
            tp:'index',
            prop:'index',
            // width:80
          },
          {
            label:'角色名',
            prop:'name'
          },
          {
            prop:'talk',
            label:'描述',
            // width:200
          },
          {
            prop:'sys',
            label:'类型',
            // width:300

          },
          {
            prop:'url',
            label:'等级',
            // width:300

          },
          {
            prop:'time',
            label:'创建时间'
          },
          {
            prop:'time',
            label:'更新时间'
          }
        ],
      }
    },
    methods: {
      submitForm () {
        alert('处理逻辑后执行隐藏操作')
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style lang="scss">
.character_wrap{
  .character_top{
    padding:10px 20px ;
    height:55px;
    line-height: 34px;
    background:#dbdbdb;
  }
  .character_bot{
    height: 70%;
    overflow:hidden;
    margin-top:25px;
    border-bottom:1px solid #eef1f6;
  }
}
</style>
