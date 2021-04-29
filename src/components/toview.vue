<template>
    <div id="toview" style="margin-left: 20px">
        <el-row>
            <h2>新文章</h2>
        </el-row>
        <el-table :data="data1">
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="编写人" prop="writer"></el-table-column>
            <el-table-column label="提交时间" prop="time"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="getInfo(scope.row)">审阅</el-button>
<!--                    <el-button size="mini" type="info">查看</el-button>-->
<!--                    <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>-->
                    <!--                    <el-button size="mini" type="primary">编辑</el-button>-->
                    <!--                    <el-button size="mini" type="success">发布</el-button>-->
                    <!--                    <el-button size="mini" type="danger">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <el-row style="margin-top: 20px">
            <h2>二次提交</h2>
        </el-row>
        <el-table :data="data2">
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="编写人" prop="writer"></el-table-column>
            <el-table-column label="提交时间" prop="time"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="getInfo(scope.row)">审阅</el-button>
<!--                    <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>-->
                    <!--                    <el-button size="mini" type="primary">编辑</el-button>-->
                    <!--                    <el-button size="mini" type="success">发布</el-button>-->
                    <!--                    <el-button size="mini" type="danger">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="详细信息" :visible="infoDialog">
            <el-row style="margin-bottom: 20px">
                <el-col :span="4">标题</el-col>
                <el-col :span="20" style="text-align: left">{{info.title}}</el-col>
            </el-row>
            <el-row style="margin-bottom: 20px">
                <el-col :span="4">平台</el-col>
                <el-col :span="4" style="text-align: left">
                    <el-tag size="mini" v-if="info.website">微信公众号</el-tag>
                </el-col>
                <el-col :span="4" style="text-align: left">
                    <el-tag size="mini" v-if="info.wechat">官方网站</el-tag>
                </el-col>
            </el-row>
            <el-row style="margin-bottom: 20px">
                <el-col :span="4">正文</el-col>
                <el-col :span="20" style="text-align: left">{{info.content}}</el-col>
            </el-row>
            <el-row >
                <el-col :span="4">
                    <el-button size="small" @click="review(1)">合格</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button size="small" @click="review(0)">不合格</el-button>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="备注" v-model="remark"></el-input>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import Qs from "qs";

    export default {
        name: "toview",
        data(){
            return{
                data1: [],
                data2: [],
                userID: 0,
                info: {},
                infoDialog: false,
                remark: ''
            }
        },
        created(){
            this.userID = this.$route.query.id
            this.getMessages()
        },
        methods:{
            getMessages(){
                const that = this
                axios.post('http://127.0.0.1:5000/reviewer/toview', Qs.stringify({
                    userID: this.userID
                })).then(function(res){
                    console.log(res.data['status'])
                    that.data1 = res.data['new']
                    that.data2 = res.data['again']
                }).catch(function(error){
                    console.log(error.response)
                })
            },
            getInfo(row){
                const that = this
                axios.post('http://127.0.0.1:5000/reviewer/start', Qs.stringify({
                    pid: row['pid'],
                    reviewer : this.userID
                })).then(function(res){
                    console.log(res.data['status'])
                    console.log(row)
                    that.info = row
                    that.infoDialog = true
                }).catch(function(error){
                    alert('error')
                    console.log(error.response)
                })
            },
            review(result){
                const that = this
                axios.post('http://127.0.0.1:5000/reviewer/finish', Qs.stringify({
                    pid: this.info['pid'],
                    reviewer : this.userID,
                    result : result,
                    remark : this.remark
                })).then(function(res){
                    console.log(res.data['status'])
                    that.infoDialog = false
                }).catch(function(error){
                    alert('error')
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>

</style>