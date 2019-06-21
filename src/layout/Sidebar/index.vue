<template>
    <div class="side-bar-container">
        <el-scrollbar wrap-class="scrollbar-wrapper" :native="false">
            <el-menu :collapse="sideBarStatus" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF"
                     :default-active="activePath" :collapse-transition="false">
                <side-bar-item v-for="route in routes" :key="route.path" :item="route" basePath="/"></side-bar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import SideBarItem from './SideBarItem';
    import {mapGetters} from 'vuex';

    export default {
        name: 'SideBar',
        components: {
            SideBarItem
        },
        computed: {
            ...mapGetters(['sideBarStatus']),

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