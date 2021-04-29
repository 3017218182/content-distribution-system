<template>
    <div id="view" style="padding: 20px">
        <el-table :data="data" border>
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="作者" prop="writer"></el-table-column>
            <el-table-column label="操作" prop="name"></el-table-column>
            <el-table-column label="时间" prop="time"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from "axios";
    import Qs from "qs";
    export default {
        name: "viewed",
        data(){
            return{
                data: [],
                userID: 0,
            }
        },
        created(){
            this.userID = this.$route.query.id
            this.getOperations()
        },
        methods:{
            getOperations(){
                const that = this
                axios.post('http://127.0.0.1:5000/reviewer/viewed', Qs.stringify({
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