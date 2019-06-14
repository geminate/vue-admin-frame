<template>
    <div class="nav-bar-container">
        <h1>vue-admin-frame</h1>
        <el-dropdown class="right-menu" trigger="click">
            <div class="avatar-wrapper">
                <i class="el-icon-user"></i>
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        methods: {
            logout() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-bar-container {
        height: 50px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        display: flex;

        h1 {
            flex: 1 1 auto;
            text-align: left;
            padding-left: 50px;
            line-height: 50px;
            font-size: 25px;
        }

        .right-menu {
            flex: 0 0 auto;

            .avatar-wrapper {
                padding-right: 25px;
                line-height: 50px;
                padding-top: 3px;

                .el-icon-user {
                    font-size: 25px;
                }
            }
        }
    }
</style>