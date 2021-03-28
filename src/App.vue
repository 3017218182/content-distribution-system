<template>
  <div id="app">
    <el-container>
      <el-header>管理系统</el-header>
      <el-container>
        <el-aside width="250px">
          <el-menu default-active="2" :router="true">
            <el-menu-item index="1" route="/edit">
              <span slot="title">新建文章</span>
            </el-menu-item>
            <el-menu-item index="2" route="/waiting">
              <span slot="title">审核结果</span>
            </el-menu-item>
            <el-menu-item index="3" route="/history">
              <span slot="title">历史记录</span>
            </el-menu-item>
            <el-menu-item index="4" route="/draft">
              <span slot="title">草稿箱</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">账号设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
<!--    <el-row>-->
<!--      <el-col span="6">-->
<!--        -->
<!--      </el-col>-->
<!--      <el-col span="18"></el-col>-->
<!--    </el-row>-->

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
