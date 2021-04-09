<template>
    <div id="waiting" style="margin-left: 20px">
        <el-row>
            <h2>审核未结束</h2>
        </el-row>
        <el-table :data="data1" border>
            <el-table-column label="题目" prop="title" ></el-table-column>
<!--            <el-table-column label="提交时间"></el-table-column>-->
<!--            58px per line-->
            <el-table-column label="状态" prop="status"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="info">查看</el-button>
                    <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>
<!--                    <el-button size="mini" type="primary">编辑</el-button>-->
<!--                    <el-button size="mini" type="success">发布</el-button>-->
<!--                    <el-button size="mini" type="danger">删除</el-button>-->
                </template>
            </el-table-column>
        </el-table>
        <el-row style="margin-top: 20px">
            <h2>审核已结束</h2>
        </el-row>
        <el-table :data="data2" border>
            <el-table-column label="题目" prop="title" ></el-table-column>
            <el-table-column label="状态" prop="status"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
<!--                <el-button size="mini" type="danger" :disabled="scope.row['status']===3">撤回</el-button>-->
                    <el-button size="mini" type="info">查看</el-button>
                    <el-button size="mini" type="success" :disabled="scope.row['status']===5">发布</el-button>
                    <el-button size="mini" type="primary" :disabled="scope.row['status']===4">编辑</el-button>
                    <el-button size="mini" type="danger" :disabled="scope.row['status']===4">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
                data1 : [],
                data2 : [],
                userID : 0,
                pageIndex : 1
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
                    that.data1 = res.data['todo']
                    that.data2 = res.data['done']
                }).catch(function(error){
                    console.log(error.response)
                })
            },
            // pageChange(val){
            //     this.pageIndex = val
            // }
        }

    }
</script>

<style scoped>

</style>