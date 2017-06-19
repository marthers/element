<template>
    <div class="table_bot">
      <el-table
          :data="tableData"
          border
          height="20%"
          style="width: 100%">
          <el-table-column
            v-for="menu in tableHead"
            :type="menu.tp ? menu.tp : ''"
            :key="menu.prop"
            :prop="menu.prop"
            :label="menu.label"
            :width="menu.width ? menu.width : ''"
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
                  class="edit"
                  size="small"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  class="edit"
                  size="small"
                  type="success"
                  @click="userEdit(scope.$index, scope.row)">角色编辑</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData:[
        {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        },
         {
          user:'jiangongshe',
          character:'企业管理员',
          type:'企业用户',
          name:'曽文学',
          maibox:'tangwenjie@ajiuzhoupress.com',
          date:'2015/8/12 19:18:15',
          identification:'A27370D244226DAE',
          key:'76F99F9FDA74EAD1',
          id:'120'

        }
      ],
      tableHead:[
        {
          tp:'index',
          // width:80

        },
        {
          label:'用户名',
          prop:'user',
          // width:120

        },
        {
          prop:'character',
          label:'角色',
          // width:110

        },
        {
          prop:'type',
          label:'类型',
          // width:100

        },
        {
          prop:'name',
          label:'姓名',
          // width:80

        },
        {
          prop:'maibox',
          label:'邮箱',
          // width:250

        },
        {
          prop:'date',
          label:'创建时间',
          // width:170
        },
        {
          prop:'identification',
          label:'唯一标识',
          // width:180
        },
        {
          prop:'key',
          label:'desKey',
          // width:180
        },
        {
          prop:'id',
          label:'用户ID',
          // width:100
        },
      ]
    }
  },
  methods:{
    Disable(index,row) {
        alert(index);
    },
    handleEdit(index,row) {
        alert(index);
    },
    userEdit(index,row) {
        alert(index);
    },
  }
}
</script>
<style scoped lang="scss">
.table_bot{
  margin-top: 25px;
  height: 80%;
  overflow: auto;
  border-bottom:1px solid #eef1f6;
  .edit{
    color:white;
  }
}
</style>
