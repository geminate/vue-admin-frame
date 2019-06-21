<template>
    <div class="layout-container">
        <side-bar></side-bar>
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