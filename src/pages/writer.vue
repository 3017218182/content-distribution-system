<template>
    <div id="writer">
        <el-container>
            <el-aside width="250px">
                <el-menu :router="true">
                    <el-menu-item index="2" route="/writer/waiting">
                        <span slot="title">审核结果</span>
                    </el-menu-item>
                    <el-menu-item index="1" route="/writer/edit">
                        <span slot="title">新建文章</span>
                    </el-menu-item>
                    <el-menu-item index="3" route="/writer/history">
                        <span slot="title">历史记录</span>
                    </el-menu-item>
                    <el-menu-item index="4" route="/writer/draft">
                        <span slot="title">草稿箱</span>
                    </el-menu-item>
                    <el-menu-item index="5" route="/writer/info">
                        <span slot="title">账号信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main >
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "writer"
    }
</script>

<style scoped>

</style>