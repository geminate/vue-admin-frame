<template>
    <div>
        <el-submenu v-if="item.children && item.children.length > 0" :index="resolvePath(item.path)">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </template>
            <side-bar-item v-for="child in item.children" :key="child.path" :item="child" :basePath="resolvePath(item.path)"></side-bar-item>
        </el-submenu>

        <el-menu-item v-else :index="resolvePath(item.path)">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
    </div>
</template>

<script>
    import path from 'path';

    export default {
        name: 'SideBarItem',
        props: ['item', 'basePath'],
        methods: {
            isExternal(path) {
                return /^(https?:|mailto:|tel:)/.test(path)
            },

            resolvePath(routePath) {
                if (this.isExternal(routePath)) {
                    return routePath
                }
                if (this.isExternal(this.basePath)) {
                    return this.basePath
                }
                return path.resolve(this.basePath, routePath)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>