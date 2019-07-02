<template>
    <div class="list-page">

        <!-- 筛选表单 -->
        <el-form :inline="true" :model="filterForm" class="filter-form" labelPosition="right" size="mini">
            <el-form-item label="姓名">
                <el-input v-model="filterForm.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-input v-model="filterForm.date" placeholder="日期"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="filterForm.address" placeholder="地址"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="primary">添加</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据表格 -->
        <el-table :data="tableData" border>
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="sex" label="姓别" width="50"></el-table-column>
            <el-table-column prop="date" label="日期" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination background layout="prev, pager, next" :total="1000" :style="{float:'right'}"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                filterForm: {
                    name: '',
                    date: '',
                    address: ''
                },
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="less" scoped>

</style>