<template>
    <div class="nav-bar-container">
        <i class="el-icon-s-fold" @click="toggleSideBar"></i>
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
    import {mapActions} from 'vuex';

    export default {
        name: 'NavBar',
        methods: {
            ...mapActions(['toggleSideBar']),

            logout() {
            },
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>