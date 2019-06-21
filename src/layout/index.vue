<template>
    <div class="layout-container" :class="{'hide-side-bar':sideBarStatus}">
        <side-bar></side-bar>
        <div class="main-container">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import NavBar from './NavBar/index';
    import SideBar from './SideBar/index';
    import AppMain from './AppMain/index';

    export default {
        name: 'Layout',
        components: {NavBar, SideBar, AppMain},
        computed: {
            ...mapGetters(['sideBarStatus']),
        }
    }
</script>