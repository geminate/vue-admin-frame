<template>
    <el-menu background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :default-active="activePath">
        <side-bar-item v-for="route in routes" :key="route.path" :item="route" basePath="/"></side-bar-item>
    </el-menu>
</template>

<script>
    import SideBarItem from './SideBarItem';

    export default {
        name: 'SideBar',
        components: {
            SideBarItem
        },
        computed: {

            // 路由列表
            routes() {
                let routes;
                this.$router.options.routes.forEach((item) => {
                    (item.isMenu) && (routes = item.children);
                });
                return routes;
            },

            // 激活的菜单路径
            activePath() {
                return this.$route.meta.activeMenu || this.$route.path;
            }
        }
    }
</script>

<style lang="less" scoped>
    /deep/ .el-menu--inline .el-menu-item, /deep/ .el-menu--inline .el-submenu__title {
        background-color: #1f2d3d !important;

        &:hover {
            background-color: #001528 !important;
        }
    }
</style>