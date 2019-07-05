<template>
    <div class="list-page">

        <!-- 筛选表单 -->
        <el-form :inline="true" :model="filterData" class="filter-form" labelPosition="right" size="mini">
            <el-form-item label="姓名">
                <el-input v-model="filterData.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-input v-model="filterData.date" placeholder="日期"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="filterData.address" placeholder="地址"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changeQuery">查询</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据表格 -->
        <div class="table-btn">
            <el-button size="mini" type="success">添加</el-button>
            <el-button size="mini" type="danger">多选删除</el-button>
        </div>

        <el-table :data="tableData" border v-loading="tableLoading">
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

        <el-pagination background
                       @size-change="changeQuery"
                       @current-change="changeQuery"
                       layout="total, sizes, prev, pager, next, jumper"
                       :current-page.sync="paginationData.pageNum"
                       :total="totalAmount"
                       :page-size.sync="paginationData.pageSize"
                       :page-sizes="pageSizes"
                       :style="{float:'right',marginTop:'20px'}">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                filterData: { // 查询数据
                    name: '',
                    date: '',
                    address: ''
                },
                paginationData: { // 分页数据
                    pageNum: 0, // 当前页码
                    pageSize: 10, // 分页大小
                },
                pageSizes: [10, 30, 50], // 分页大小选项
                totalAmount: 0, // 数据总量
                tableData: [], // 表格数据
                tableLoading: false, // 表格是否正在加载
            }
        },
        watch: {

            // 页面地址参数发生变化时刷新表格数据
            $route(to, from) {
                this.queryToData();
                this.refreshTableData();
            }
        },
        methods: {

            // 初始化页面数据
            async initValue() {
                this.queryToData();
                await this.refreshTableData();
            },

            // 将页面参数转为页面状态
            queryToData() {
                const query = this.$route.query;
                this.filterData = {name: query.name, date: query.date, address: query.address};
                this.paginationData = {pageNum: Number(query.pageNum), pageSize: Number(query.pageSize)};
            },

            // 刷新表格数据
            async refreshTableData() {
                this.tableLoading = true;
                const {resultCode, resultMessage, data, total} = await this.$api.getSimpleList({
                    filterData: this.filterData,
                    paginationData: this.paginationData
                });
                if (resultCode == 0) {
                    this.tableData = data;
                    this.totalAmount = Number(total);
                } else {
                    this.$utils.error(resultMessage);
                }
                this.tableLoading = false;
            },

            // 改变页面地址参数
            changeQuery() {
                this.$router.push({query: {...this.filterData, ...this.paginationData}});
            }
        },
        created() {
            this.initValue();
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>