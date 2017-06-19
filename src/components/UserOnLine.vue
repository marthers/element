<template>
  <div class="online">
      <div class="online_top">
          用户在线列表
      </div>
      <div class="table_bot">
          <el-table
              :data="tableData"
              border
              height="750"
              style="width: 100%">
              <el-table-column
                v-for="items in tableHead"
                :key="items.prop"
                :type="items.tp?items.tp:''"
                :prop="items.prop"
                :label="items.label"
                :width="items.width?items.width:''">
              </el-table-column>
          </el-table>
    </div>
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
          prop:'index',
          width:80
        },
        {
          label:'登录名',
          prop:'user'
        },
        {
          prop:'character',
          label:'姓名'
        },
        {
          prop:'type',
          label:'单位'

        },
        {
          prop:'name',
          label:'在线工具'

        },
        {
          prop:'maibox',
          label:'MAC地址',
          width:350

        },
        {
          prop:'date',
          label:'时间'
        }
        
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


.online{
  padding: 30px 0 0 50px;
   .online_top{
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
    .word_log{
      margin-left:2%;
    }
    .button{
      margin-left:2%;
    }
  }
  .table_bot{
    height: 75%;
    overflow: hidden;
    margin-top:25px;
    border-bottom:1px solid #eef1f6;
    .edit{
      color:white;
      background:rgb(92, 184, 92);
    }
  }


  .el-pagination{
    float:right;
    margin:10px;
  }
}
</style>
