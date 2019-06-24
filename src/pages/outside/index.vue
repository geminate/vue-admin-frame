<template>
    <iframe :src="src" frameborder="0"></iframe>
</template>

<script>
    export default {
        name: 'outside',
        data() {
            return {
                src: ''
            }
        },
        watch: {
            $route() {
                this.refreshSrc();
            }
        },
        methods: {
            refreshSrc() {
                this.src = this.$route.meta.url;
            }
        },
        mounted() {
            this.refreshSrc()
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>