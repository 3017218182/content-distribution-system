<template>
    <div id="app">
        <el-container>
<!--            <el-header style="background-color: #42b983">管理系统</el-header>-->
            <el-header style="background-color: #42b983;height: 75px">
                <h1>管理系统</h1>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
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
// import axios from 'axios'

export default {
    name: 'App',
    data(){
        return {
            msg : "管理系统"
        }
    },
    // created(){
    //     const that = this;
    //     axios.get('http://127.0.0.1:5000').then(function(res){
    //         console.log(res.data)
    //         that.msg=res.data
    //     }).catch(function(error){
    //         console.log(error.response)
    //     })
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
}
</style>
