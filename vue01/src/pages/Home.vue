<template>
    <div>
          <br>
          <br>
          <div class="demo-input-suffix">
              <div class="block">
                <span class="demonstration">时间：</span>
                <el-date-picker suffix-icon="el-icon-date" v-model="input1" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
              </div>
            <br>
            <br>
              内容：
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </div>
          <br>
          <el-button type="primary" @click="add">添加</el-button> 
        
        <br>
        <br>
        <section class="main">
            <ul class="to_list" style="list-style-type:none;">
                <li class="todo" v-for="(item,index) in listDetail">
                  <el-timeline>
                    <el-timeline-item timestamp="2024/5/2" placement="top">
                      <el-card>
                        <h4>添加内容 {{ item }}</h4>
                        <p>添加时间 {{listtime[index]}}</p>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </li>
            </ul>
        </section>
        <!-- 
        <footer class="footer">
            <span class="todo_count" v-if="list.length!=0">
                <strong>{{ list.length }}</strong>
                items left
            </span>
            <button @click="clear" class="clear_completed" v-show="list.length!=0">Clear</button>
        </footer> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        listDetail:["123","456","789"],
        listuser:["123","456","789"],
        listtime:["123","456","789"],
        input1:"",
        input2:"",
      };
    },
    methods: {
      add:function(){
        this.listDetail.push(this.input2);
        this.listtime.push(this.input1);
        this.input1="";
        this.input2="";
      },
      remove:function(index){
        console.log("1")
      this.list.splice(index,1);
      },
      clear:function(){
        this.listDetail = [];
      }
    },
  }
  </script>
  
  <style scoped>

  </style>
  
  