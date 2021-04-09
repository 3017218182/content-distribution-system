<template>
    <div id="writer">
        <el-container>
            <el-aside width="250px">
                <el-menu :router="true" style="height: 620px">
                    <el-menu-item index="2" :route="{ path:'/writer/waiting',query: {id: this.userID}}">
                        <span slot="title">审核结果</span>
                    </el-menu-item>
                    <el-menu-item index="1" :route="{path:'/writer/edit', query:{id:this.userID}}">
                        <span slot="title">新建文章</span>
                    </el-menu-item>
                    <el-menu-item index="3" :route="{path:'/writer/historyofmessages', query:{id:this.userID}}">
                        <span slot="title">我的文章</span>
                    </el-menu-item>
                    <el-menu-item index="4" :route="{path:'/writer/historyofoperations', query:{id:this.userID}}">
                        <span slot="title">操作记录</span>
                    </el-menu-item>
                    <el-menu-item index="5" :route="{path: '/writer/draft', query:{id:this.userID}}">
                        <span slot="title">草稿箱</span>
                    </el-menu-item>
                    <el-menu-item index="6" :route="{path: '/writer/info', query:{id:this.userID}}">
                        <span slot="title">账号信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main style="padding-top: 0; height: 620px ">
                <router-view ></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "writer",
        data(){
            return {
                userID: 0
            }
        },
        created(){
            this.userID = this.$route.query.id
            console.log(this.userID)
            // const that = this
            // if (this.userID == null){
            //     that.$router.push("")
            // }
        }
    }
</script>

<style scoped>

</style>