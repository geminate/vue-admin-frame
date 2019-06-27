<template>
    <div class="app-main">
        <breadcrumb class="breadcrumb-container"></breadcrumb>
        <transition name="fade-transform" mode="out-in">
            <router-view class="page"/>
        </transition>
    </div>
</template>

<script>
    import Breadcrumb from '../Breadcrumb';

    export default {
        name: 'AppMain',
        components: {Breadcrumb}
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>