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
    import Qs from 'qs'
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
                axios.post('http://127.0.0.1:5000/login', Qs.stringify({
                    username: this.info.username,
                    password: this.info.password
                })).then(function(res){
                    if (res.data['status']==='ok') {
                        console.log(res.data['info'])
                        if (res.data['job']==='w'){
                            // const user = res.data['userID']
                            that.$router.push({
                                path: '/writer',
                                query: {
                                    id: res.data['userID']
                                }
                            })
                        }
                        else {
                            that.$router.push({
                                path: '/reviewer',
                                query: {
                                    id: res.data['userID']
                                }
                            })
                        }
                    }
                    else {
                        console.log(res.data['info'])
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