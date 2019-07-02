<template>
    <div class="nav-bar-container">
        <i class="el-icon-s-fold" @click="toggleSideBar"></i>
        <h1>vue-admin-frame</h1>
        <el-dropdown class="right-menu" trigger="click" @command="handleDropDown">
            <div class="avatar-wrapper">
                <i class="el-icon-user"></i>
                <span>{{userInfo.name}}</span>
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'NavBar',
        computed: {
            ...mapGetters(['userInfo'])
        },
        methods: {
            ...mapActions(['toggleSideBar', 'logout']),

            // 下拉菜单按钮点击事件
            handleDropDown(command) {
                command == 'logout' && this.handleLogout();
            },

            // 登出
            async handleLogout() {
                await this.logout();
                this.$router.push('/login');
            },
        },
        created() {

        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>