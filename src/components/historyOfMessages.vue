<template>
    <div id="historyOfMessages" style="margin-left: 20px">
        <el-table :data="data" border>
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="发布时间" prop="publishTime"></el-table-column>
            <el-table-column label="发布平台" prop="platform"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="info">查看详情</el-button>
                    <el-button size="mini" type="success">操作记录</el-button>
                    <el-button size="mini" type="danger" :disabled="scope.row['publishTime']==='尚未发布'">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
            }
        }
    }
</script>

<style scoped>

</style>