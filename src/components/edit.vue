<template>
    <div id="edit" style="margin-left: 20px">
        <el-form :model="message" :rules="rules" ref="message">
            <el-form-item label="标题" prop="title">
                <el-input v-model="message.title"></el-input>
            </el-form-item>
            <el-form-item label="正文" prop="content">
                <el-input v-model="message.content" type="textarea" :rows="14"></el-input>
            </el-form-item>
            <el-form-item label="发布平台" prop="platform" style="text-align: left">
                <el-checkbox-group v-model="message.platform" style="margin-left: 100px">
                    <el-checkbox label="网站"></el-checkbox>
                    <el-checkbox label="微信公众号"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm('message',2)">提交</el-button>
                <el-button @click="submitForm('message',1)">存草稿</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios'
    import Qs from "qs";
    export default {
        name: "edit",
        data(){
            return{
                message : {
                    title : '',
                    content : '',
                    platform : []
                },
                userID : null,
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入正文', trigger: 'blur'}
                    ],
                    platform: [
                        { type: 'array', required: true, message: '请至少选择一个发布平台', trigger: 'change' }
                    ]
                }
            }
        },
        created(){
            this.userID = this.$route.query.id
        },
        methods:{
            submitForm(formName,stat) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.sendMessage(stat)
                    } else {
                        return false;
                    }
                });
            },
            contain(str){
                for (let i = 0; i< this.message.platform.length; i++){
                    if(this.message.platform[i]===str){
                        return 1
                    }
                }
                return 0
            },
            sendMessage(stat) {
                var that = this
                let ifweb = this.contain("网站")
                let ifwechat = this.contain("微信公众号")
                axios.post('http://127.0.0.1:5000/writer/newMessage',Qs.stringify({
                    status: stat,
                    writer: this.userID,
                    title: this.message.title,
                    content: this.message.content,
                    web: ifweb,
                    wechat: ifwechat}
                )).then(function(res){
                    if (res.data['status']==='ok'){
                        alert(res.data['message'])
                        that.message.title = ''
                        that.message.content = ''
                        that.message.platform = []
                    }
                    else {
                        alert("服务器出错")
                    }
                }).catch(function(error){
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>

</style>