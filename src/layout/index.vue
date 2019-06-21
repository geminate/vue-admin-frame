<template>
    <div class="layout-container">
        <side-bar class="side-bar-container"></side-bar>
        <div class="main-container">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import NavBar from './NavBar/index';
    import SideBar from './SideBar/index';
    import AppMain from './AppMain/index';

    export default {
        name: 'Layout',
        components: {NavBar, SideBar, AppMain},
    }
</script>

<style lang="less" scoped>
    .layout-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        .side-bar-container {
            transition: width .28s;
            width: 210px;
            background-color: #304156;
            height: 100vh;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;

            &.el-menu--collapse {
                width: 64px;
            }
        }

        .main-container {
            margin-left: 210px;
            min-height: 100vh;
        }
    }
</style>