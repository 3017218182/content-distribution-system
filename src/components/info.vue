<template>
    <div id="info" style="margin-top: 20px">
        <el-form :model="form" label-width="200px">
            <el-form-item label="编号">
                <el-row>
                    <el-col :span="6" :offset="2">
                        <div class="msg">{{form.id}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="姓名">
                <el-row>
                    <el-col :span="6" :offset="2">
                        <div class="msg">{{form.name}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="职务">
                <el-row>
                    <el-col :span="6" :offset="2">
                        <div class="msg" >{{form.job}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="密码">
                <el-row>
                    <el-col :span="6" :offset="2">
                        <div class="msg">{{form.key}}</div>
                    </el-col>
                    <el-col :span="1">
                        <i class="el-icon-view"></i>
                    </el-col>
                    <el-col :span="10">
                        <el-button>修改</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="电话">
                <el-row>
                    <el-col :span="6" :offset="2" class="msg">
                        <div>{{form.tel}}</div>
                    </el-col>
                    <el-col :span="10" :offset="1">
                        <el-button>修改</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from "axios";
    import Qs from "qs";

    export default {
        name: "info",
        data (){
            return{
                form:{
                    id: '',
                    name: "",
                    job: "",
                    key: "",
                    tel: ""
                }
            }
        },
        created(){
            this.userID = this.$route.query.id
            this.getAllMessages()
        },
        methods:{
            getAllMessages(){
                const that = this
                axios.post('http://127.0.0.1:5000/writer/getinfo', Qs.stringify({
                    userID: this.userID
                })).then(function(res){
                    console.log(res.data['status'])
                    that.form = res.data['message']
                }).catch(function(error){
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>
.msg{
    background-color: beige;
    /*width: 200px;*/
}
</style>