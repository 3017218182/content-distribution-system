<template>
    <div id="historyOfMessages" style="margin-left: 20px">
        <el-table :data="data" border>
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="发布时间" prop="publishTime"></el-table-column>
            <el-table-column label="发布平台">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row['wechat']" style="margin-right: 5px" size="small">微信公众号</el-tag>
                    <el-tag v-if="scope.row['website']" size="small">官方网站</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" @click="getInfo(scope.row['pid'])">查看详情</el-button>
                    <el-button size="mini" type="danger" v-if="scope.row['publishTime']!='尚未发布'" @click="rollback(scope.row['pid'])">撤回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="详细信息" :visible.sync="infoDialog">
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
        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import Qs from "qs";

    export default {
        name: "historyOfMessages",
        data(){
            return{
                data: [],
                userID: 0,
                info: {},
                infoDialog : false
            }
        },
        created(){
            this.userID = this.$route.query.id
            this.getAllMessages()
        },
        methods:{
            getAllMessages(){
                const that = this
                axios.post('http://127.0.0.1:5000/writer/historyOfMessages', Qs.stringify({
                    userID: this.userID
                })).then(function(res){
                    console.log(res.data['status'])
                    that.data = res.data['message']
                }).catch(function(error){
                    console.log(error.response)
                })
            },
            getInfo(id){
                console.log(id)
                for(let i = 0; i < this.data.length; i++){
                    if (this.data[i]['pid'] === id){
                        this.info = this.data[i]
                        break
                    }
                }
                this.infoDialog = true
            },
            rollback(id) {
                console.log(id)
                const that = this
                this.$confirm('撤销后文章将保存为草稿, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(that.userID)
                    axios.post('http://127.0.0.1:5000/writer/rollback',Qs.stringify({
                        pid : id,
                        writer : that.userID,
                    })).then(function (res) {
                            that.$message({
                                type: 'success',
                                message: res.data['message']
                            });
                        }
                    )
                    // this.$message({
                    //     type: 'success',
                    //     message: '发布成功!'
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>