<template>
    <div class="department-manage-page">


        <el-tree :data="departmentTreeData" show-checkbox node-key="id" default-expand-all></el-tree>

    </div>
</template>

<script>
    export default {
        name: 'departmentManage',
        data() {
            return {
                departmentTreeData: []
            }
        },
        methods: {
            // 初始化页面数据
            async initValue() {
                const {resultCode, resultMessage, data} = await this.$api.getDepartmentTree();
                if (resultCode == 0) {
                    this.departmentTreeData = data;
                } else {
                    this.$utils.error(resultMessage);
                }
            }
        },
        mounted() {
            this.initValue();
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>