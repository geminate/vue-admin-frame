<template>
    <div>
        <el-submenu v-if="showSubMenu(item)" :index="resolvePath(item.path)">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </template>
            <side-bar-item v-for="child in item.children" :key="child.path" :item="child"
                           :basePath="resolvePath(item.path)"></side-bar-item>
        </el-submenu>

        <router-link v-else :to="resolvePath(item.path)">
            <el-menu-item :index="resolvePath(item.path)">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </router-link>
    </div>
</template>

<script>
    import path from 'path';

    export default {
        name: 'SideBarItem',
        props: ['item', 'basePath'],
        methods: {
            resolvePath(routePath) {
                return path.resolve(this.basePath, routePath)
            },

            // 是否应显示为下拉菜单：含有 children 且 children 不全为 隐藏
            showSubMenu(item) {
                return item.children && item.children.length > 0 && item.children.filter(item => !item.meta.hidden).length > 0
            }
        }
    }
</script>