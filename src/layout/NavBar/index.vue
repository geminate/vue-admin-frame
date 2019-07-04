<template>
    <div class="nav-bar-container">
        <h1 :class="{open:!sideBarStatus}">{{sideBarStatus ? 'V' : 'vue-admin-frame'}}</h1>
        <i class="el-icon-s-fold" @click="toggleSideBar"></i>


        <ul class="top-menu">
            <li v-for="route in routes" @click="handleNavClick(route)" :class="{active:route.name == activeMenu}">
                <i :class="route.meta.icon"></i>
                {{route.meta.title}}
            </li>
        </ul>

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
    import path from 'path';

    export default {
        name: 'NavBar',
        data() {
            return {
                activeMenu: 'dashboard'
            }
        },
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
        watch: {
            $route() {
                this.activeMenu = this.$route.matched[0].name;
                this.setLeftRoutes(this.getLeftRoutes(this.$route.matched[0]));
            }
        },
        methods: {
            ...mapActions(['toggleSideBar', 'hideSideBar', 'showSideBar', 'logout', 'setLeftRoutes']),


            // 下拉菜单按钮点击事件
            handleDropDown(command) {
                command == 'logout' && this.handleLogout();
            },

            // 登出
            async handleLogout() {
                await this.logout();
                this.$router.push('/login');
            },

            isActive(menu) {
                let re = false
                this.$route.matched.map((item) => {
                    item.path == "" && (item.path = "/");
                    if (item.path == menu.path) {
                        re = true;
                    }
                });
                return re;
            },

            handleNavClick(item) {
                this.activeMenu = item.name;
                if (this.showSubMenu(item)) {
                    this.showSideBar();
                    this.setLeftRoutes(this.getLeftRoutes(item));
                } else {
                    this.$router.push(item.redirect);
                    this.setLeftRoutes([]);
                    this.hideSideBar();
                }
            },

            showSubMenu(item) {
                return item.children && item.children.length > 0 && item.children.filter(item => !item.meta.hidden).length > 0
            },

            getLeftRoutes(current) {
                const currentName = current.name;
                let re = [];
                this.routesArr.forEach((item) => {
                    if (item.name == currentName) {
                        item.children.map((item) => {
                            item.path = path.resolve(current.path, item.path);
                            return item;
                        });
                        re = item.children;
                    }
                });
                return re;
            }
        },
        mounted() {
            this.activeMenu = this.$route.matched[0].name;
            this.setLeftRoutes(this.getLeftRoutes(this.$route.matched[0]));
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>