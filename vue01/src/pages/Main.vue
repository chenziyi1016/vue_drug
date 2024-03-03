<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <el-main>
<!--         路由出口，路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
export default {
  name: "Main",
  components:{CommonAside,CommonHeader}
}
</script>

<style scoped>
.el-header{
  padding: 0;
  margin: 0;
}
.el-menu{
  border-right: none;
}
</style>

