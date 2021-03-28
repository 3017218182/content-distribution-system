<template>
    <div id="waiting" style="padding: 20px">
        <el-table :data="data1">
            <el-table-column label="题目" prop="title"></el-table-column>
            <el-table-column label="提交时间" prop="time"></el-table-column>
            <el-table-column label="状态" prop="status"></el-table-column>
            <el-table-column label="操作" width="350px">
                <el-button size="mini" type="danger" :disabled="data1[0].status==2">撤回</el-button>
                <el-button size="mini" type="primary">编辑</el-button>
                <el-button size="mini" type="success">发布</el-button>
                <el-button size="mini" type="danger">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "waiting",
        data (){
            return{
                data1 : [
                    {
                        title:2,
                        time:2,
                        status:2
                    }
                ]
            }
        }

    }
</script>

<style scoped>

</style>