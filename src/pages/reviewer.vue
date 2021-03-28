<template>
    <div id="reviewer">
        <el-container>
            <el-aside>
                <el-menu :router="true">
                    <el-menu-item index="1" route="/reviewer/toview">
                        <span slot="title">待审核</span>
                    </el-menu-item>
                    <el-menu-item index="2" route="/reviewer/viewed">
                        <span slot="title">历史记录</span>
                    </el-menu-item>
                    <el-menu-item index="3" route="/reviewer/info">
                        <span slot="title">账号信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "reviewer"
    }
</script>

<style scoped>

</style>