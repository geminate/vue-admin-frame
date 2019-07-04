<template>
    <div class="nav-bar-container">
        <h1 :class="{open:!sideBarStatus}">{{sideBarStatus ? 'V' : 'vue-admin-frame'}}</h1>
        <i class="el-icon-s-fold" @click="toggleSideBar"></i>


        <el-menu :default-active="activePath" mode="horizontal" class="top-menu">
            <side-bar-item v-for="route in routes" :key="route.path" :item="route" basePath="/"></side-bar-item>
        </el-menu>


        <div class="dropdown-container">
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
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import SideBarItem from '../SideBar/SideBarItem';

    export default {
        name: 'NavBar',
        components: {
            SideBarItem
        },
        computed: {
            ...mapGetters(['userInfo', 'sideBarStatus', 'routesArr']),

            // 激活的菜单路径
            activePath() {
                return this.$route.meta.activeMenu || this.$route.path;
            },

            // 路由列表
            routes() {
                return this.routesArr.filter((item) => {
                    return item.meta.hidden != true
                });
            },
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