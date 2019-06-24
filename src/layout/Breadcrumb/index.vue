<template>
    <el-breadcrumb separator="/" class="breadcrumb-container">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="item.path">
                <router-link v-if="item.path && item.meta.breadcrumbClick" :to="item.path">{{item.meta.title}}
                </router-link>
                <span v-else>{{item.meta.title}}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        data() {
            return {
                breadcrumbList: [], // 面包屑列表
            }
        },
        watch: {
            $route() {
                this.getBreadcrumbList();
            }
        },
        methods: {

            // 更新面包屑列表
            getBreadcrumbList() {

                // 过滤掉 没有 title 的 route
                const tempList = this.$route.matched.filter((item) => {
                    return item.meta.title;
                });

                // 当前不在首页的话 在最前面添加首页
                if (tempList[0].path != '/dashboard') {
                    tempList.unshift({path: '/dashboard', meta: {title: '首页', breadcrumbClick: true}});
                }

                this.breadcrumbList = tempList;
            }
        },
        mounted() {
            this.getBreadcrumbList();
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>