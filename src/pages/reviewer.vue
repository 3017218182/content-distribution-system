<template>
    <div id="reviewer">
        <el-container>
            <el-aside width="250px">
                <el-menu :router="true" style="height: 620px">
                    <el-menu-item index="1" :route="{path: '/reviewer/toview', query: {id: this.userID}}">
                        <span slot="title">待审核</span>
                    </el-menu-item>
                    <el-menu-item index="2" :route="{path: '/reviewer/viewed', query: {id: this.userID}}">
                        <span slot="title">历史记录</span>
                    </el-menu-item>
                    <el-menu-item index="3" :route="{path: '/reviewer/info', query: {id: this.userID}}">
                        <span slot="title">账号信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main style="padding-top: 0; height: 620px">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "reviewer",
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