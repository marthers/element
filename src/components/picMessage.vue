<template>
<div class="word">
  <div class="word_top">
      图片下载
  </div>
  <div class="word_message">
    <span>单张下载</span>
    <el-form label-position="top" label-width="110px">
          <el-form-item label="请输入ISBN号:">
              <el-input ></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">下载</el-button>
    </el-form>
  </div>
  <div class="word_message">
  <span>多张下载</span>
    <el-form label-position="top" label-width="170px">
          <el-form-item label="请输入ISBN号(以,分隔 ):">
              <el-input type="textarea" rows="5"></el-input>
          </el-form-item>
          <el-button class="textButton"type="primary" @click="onSubmit">下载</el-button>
    </el-form>
  </div>
</div>
</template>
<script>
  export default {
   created () {
      console.log("创建")
      this.$http.post('http://200.1.3.106:9104/CnLog/List/Search',{
      }).then(data=>{
          console.log(data);
      });
    },
    methods: {
      onSubmit() {
        alert("下载图片")
       
      }
    }
  };
</script>
</script>

<style scoped lang="scss">
.word{
  padding: 30px 0 0 50px;
   .word_top{
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
  .word_message{
    margin-top:50px;
    span{
      margin-left:1%;
    }
    .el-form{
        display:flex;
        justify-content:flex-start;
        .el-form-item{
          flex:0 0 40%;
        },
        .el-button{
          margin-top: 25px;
          height: 35px;
          margin-left:1%;
        }
        .textButton{
          margin-top:100px;
        }

    }
   
  }
}

</style>
