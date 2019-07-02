<template>
    <div>
        这是首页
    </div>
</template>

<script>
    export default {
        name: 'DashboardPage',
        mounted() {
            console.log(this.$route)
            console.log(this.$router)
        }
    }
</script>

<style lang="less" scoped>
</style>