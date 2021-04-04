<template>
    <div id="login">
        <el-form :form="info" style="width: 300px; margin: 50px auto auto;">
            <el-form-item label="name">
                <el-input v-model="info.username"></el-input>
            </el-form-item>
            <el-form-item label="key">
                <el-input v-model="info.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
            return {
                info : {
                    username:'',
                    password:''
                },
            }
        },
        methods:{
            login(){
                const that = this;
                axios.post('http://127.0.0.1:5000/',{
                    username: this.info.username,
                    password: this.info.password
                }).then(function(res){
                    if (res.data===1) {
                        console.log(res.data)
                        that.$router.push({name: 'writer'})
                    }
                    else {
                        console.log(res.data)
                    }
                }).catch(function(error){
                    console.log(error.response)
                })
            }
        },
        // created(){
        //     this.login();
        // }
    }

</script>

<style scoped>

</style>