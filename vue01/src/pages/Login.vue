<template>
    <div id="app">
      <div class="main-content">
        <div class="title">系统登录</div>
        <div class="content">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter="20">
                <el-col :span="12" :offset="4"><router-link to="/login"><el-button type="primary" @click="submitForm('ruleForm')">登录</el-button></router-link></el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </div>
  
    </div>
  
  </template>
  
  <script>
  export default {
    name: "login",
    data(){
      return{
        ruleForm: {
          name: '',
          password:""
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required:true,message:"请输入密码",trigger:"blur"}
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
  </script>
  
  <style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    display: flex;
    background-color: #333;
    height: 800px;
    .main-content{
      height: 300px;
      width: 400px;
      background-color: #fff;
      margin: 200px auto;
      border-radius: 10px;
      padding: 30px;
      box-sizing: border-box;
      box-shadow: 5px  5px 10px rgba(0,0,0,0.5),-5px -5px 10px rgba(0,0,0,0.5);
      .title{
        font-size: 20px;
        text-align: center;
        //margin-top: 30px;
        font-weight: 300;
      }
      .content{
        margin-top: 30px;
      }
    }
  }
  </style>
  