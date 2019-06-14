<template>
    <div class="app-main">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'AppMain',
    }
</script>

<style lang="less" scoped>
    .app-main {
        height: calc(100vh - 50px);
        box-sizing: border-box;
        padding: 15px;
        overflow: auto;
    }
</style>