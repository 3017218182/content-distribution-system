<template>
    <div id="waiting" style="margin-left: 20px">
<!--        <el-row>-->
<!--            <h2>审核未结束</h2>-->
<!--        </el-row>-->
        <el-table :data="data" border>
            <el-table-column label="题目" prop="title" ></el-table-column>
<!--            <el-table-column label="提交时间"></el-table-column>-->
<!--            58px per line-->
            <el-table-column label="状态" prop="name"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" @click="getInfo(scope.row['pid'])">查看</el-button>
<!--                    <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>-->
                    <el-button size="mini" type="primary" v-if="scope.row['name']==='审核未通过'" @click="getEdit(scope.row['pid'])">编辑</el-button>
                    <el-button size="mini" type="success" v-if="scope.row['name']==='审核通过'" @click="publish(scope.row['pid'])">发布</el-button>
<!--                    <el-button size="mini" type="danger">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
<!--        <el-row style="margin-top: 20px">-->
<!--            <h2>审核已结束</h2>-->
<!--        </el-row>-->
<!--        <el-table :data="data2" border>-->
<!--            <el-table-column label="题目" prop="title" ></el-table-column>-->
<!--            <el-table-column label="状态" prop="status"></el-table-column>-->
<!--            <el-table-column label="操作" width="400px">-->
<!--                <template slot-scope="scope">-->
<!--&lt;!&ndash;                <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>&ndash;&gt;-->
<!--                    <el-button size="mini" type="info">查看</el-button>-->
<!--                    <el-button size="mini" type="success" :disabled="scope.row['status']===5">发布</el-button>-->
<!--                    <el-button size="mini" type="primary" :disabled="scope.row['status']===4">编辑</el-button>-->
<!--&lt;!&ndash;                    <el-button size="mini" type="danger" :disabled="scope.row['status']===4">删除</el-button>&ndash;&gt;-->
<!--                </template>-->
<!--            </el-table-column>-->
<!--        </el-table>-->
        <el-dialog title="编辑" :visible.sync="editDialog">
            <el-form :model="msg" ref="info">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="msg.title"></el-input>
                </el-form-item>
                <el-form-item label="正文" prop="content">
                    <el-input v-model="msg.content" type="textarea" :rows="8"></el-input>
                </el-form-item>
                <el-form-item label="发布平台" prop="platform" style="text-align: left">
                    <el-checkbox label="网站" v-model="msg.website"></el-checkbox>
                    <el-checkbox label="微信公众号" v-model="msg.wechat"></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button @click="updateMsg(0)">保存</el-button>
                    <el-button @click="updateMsg(1)">提交</el-button>
                    <el-button @click="editDialog=false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
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
<!--        <el-pagination background layout="prev, pager, next" :total="data1.length" :page-size="9"-->
<!--                       @current-change="pageChange" style="margin-top: 30px"></el-pagination>-->
    </div>
</template>

<script>
    import axios from 'axios'
    import Qs from "qs";
    export default {
        name: "waiting",
        data (){
            return{
                data : [],
                // data2 : [],
                userID : 0,
                infoDialog : false,
                editDialog : false,
                info : {},
                msg :{}
            }
        },
        created(){
            this.userID = this.$route.query.id
            console.log(this.userID)
            this.getStatus()
        },
        methods:{
            getStatus(){
                const that = this
                axios.post('http://127.0.0.1:5000/writer/waiting', Qs.stringify({
                    userID: this.userID
                })).then(function(res){
                    console.log(res.data['status'])
                    that.data = res.data['msg']
                    // that.data2 = res.data['done']
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
            getEdit(id){
                console.log(id)
                for(let i = 0; i < this.data.length; i++){
                    if (this.data[i]['pid'] === id){
                        this.msg = this.data[i]
                        console.log(this.msg.title)
                        break
                    }
                }
                this.editDialog = true
            },
            updateMsg(op){
                const that = this;
                console.log(this.msg.title)
                let ifweb = Number(this.msg.website)
                let ifwechat = Number(this.msg.wechat)
                console.log(ifweb)
                axios.post('http://127.0.0.1:5000/writer/updateMessage',Qs.stringify({
                    pid : this.msg.pid,
                    writer : this.userID,
                    title: this.msg.title,
                    content: this.msg.content,
                    website: ifweb,
                    wechat: ifwechat,
                    op: op
                }
                )).then(function(res){
                    if (res.data['status']==='ok'){
                        alert(res.data['message'])
                        that.editDialog = false
                    }
                    else {
                        alert("服务器出错")
                    }
                }).catch(function(error){
                    console.log(error.response)
                })
            },
            publish(id) {
                console.log(id)
                const that = this
                this.$confirm('此操作不可逆, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log(that.userID)
                    axios.post('http://127.0.0.1:5000/writer/publish',Qs.stringify({
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
            // pageChange(val){
            //     this.pageIndex = val
            // }
        }

    }
</script>

<style scoped>

</style>