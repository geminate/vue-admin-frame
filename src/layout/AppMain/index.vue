<template>
    <div class="app-main">
        <breadcrumb class="breadcrumb-container"></breadcrumb>
        <router-view class="page"/>
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