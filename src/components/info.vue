<template>
    <div id="info" style="padding: 20px">
        <el-form :model="form" label-width="200px">
            <el-form-item label="编号">
                <el-row>
                    <el-col span="6" offset="2">
                        <div class="msg">{{form.id}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="姓名">
                <el-row>
                    <el-col span="6" offset="2">
                        <div class="msg">{{form.name}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="职务">
                <el-row>
                    <el-col span="6" offset="2">
                        <div class="msg">{{form.job}}</div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="密码">
                <el-row>
                    <el-col span="6" offset="2">
                        <div class="msg">{{form.key}}</div>
                    </el-col>
                    <el-col span="1">
                        <i class="el-icon-view"></i>
                    </el-col>
                    <el-col span="10">
                        <el-button>修改</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="电话">
                <el-row>
                    <el-col span="6" offset="2" class="msg">
                        <div>{{form.tel}}</div>
                    </el-col>
                    <el-col span="10" offset="1">
                        <el-button>修改</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "info",
        data (){
            return{
                form:{
                    id: 1,
                    name: "王大",
                    job: "发布者",
                    key: "cauhu23",
                    tel: "1223423"
                }
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