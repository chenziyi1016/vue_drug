<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" background-color="#545c64" text-color="#fff"
             active-text-color="#ffd04b">
      <h3>{{isCollapse?'小助手':'医药小助手'}}</h3>
      <el-menu-item @click="clickMenu(item)"  v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot:title>{{item.label}}</span>
      </el-menu-item>
      <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.label">
        <template slot:title>
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot:title>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path" :key="subItem.path" v-for="subItem in item.children">
            {{subItem.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

</template>



<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100vh;  //占据页面高度100%
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuData:[
        {
          path:'/',
          name:"home",
          label:"用药助手",
          icon:"s-home",
          url:'Home/Home'
        },
        {
          path:'/mall',
          name:"mall",
          label:"医用药品说明",
          icon:"video-play",
          url:'MallManage/MallManage'
        },
        {
          path:'/user',
          name:"user",
          label:"药品百科",
          icon:"user",
          url:'userManage/userManage'
        },
        // {
        //   label:"其他",
        //   icon:"location",
        //   children:[
        //     {
        //       path:'/page1',
        //       name:"page1",
        //       label:"页面1",
        //       icon:"setting",
        //       url:'Other/PageOne'
        //     },
        //     {
        //       path:'/page2',
        //       name:"page2",
        //       label:"页面2",
        //       icon:"setting",
        //       url:'Other/PageTwo'
        //     },
        //   ]
        // },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      // console.log(item)
      // console.log(this.$route.path)
      // 当页面的路由与跳转的路由不一致才允许跳转
      if(this.$route.path!==item.path && !(this.$route.path==='/home'&&(item.path==='/'))){
        this.$router.push(item.path)
      }
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  computed:{
    //没有子菜单的数据
    noChildren(){
      return this.menuData.filter(item=>!item.children)
    },
    //有子菜单数组
    // hasChildren(){
    //   return this.menuData.filter(item=>item.children)
    // },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

