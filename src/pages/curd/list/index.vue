<template>
    <div class="list-page">

        <!-- 筛选表单 -->
        <el-form :inline="true" :model="filterData" labelPosition="right" size="mini">
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

        <!-- 表格上部的按钮 -->
        <div class="table-btn">
            <el-button size="mini" type="success">添加</el-button>
            <el-button size="mini" type="danger">多选删除</el-button>
        </div>

        <!-- 数据表格 -->
        <el-table :data="tableData" border @sort-change="sortChange" v-loading="tableLoading"
                  :default-sort="{prop: orderBy, order: order}">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="name" sortable="custom" label="姓名" width="100"></el-table-column>
            <el-table-column prop="sex" sortable="custom" label="姓别" width="80"></el-table-column>
            <el-table-column prop="date" sortable="custom" label="日期" width="100"></el-table-column>
            <el-table-column prop="address" sortable="custom" label="地址"></el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="mini">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination class="pagination"
                       background
                       @size-change="changeQuery"
                       @current-change="changeQuery"
                       layout="total, sizes, prev, pager, next, jumper"
                       :current-page.sync="paginationData.pageNum"
                       :total="totalAmount"
                       :page-size.sync="paginationData.pageSize"
                       :page-sizes="pageSizes">
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
                sortData: {},
                pageSizes: [10, 30, 50], // 分页大小选项
                totalAmount: 0, // 数据总量

                orderBy: null, // 排序列
                order: '', // 排序方式

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
                this.orderBy = query.orderBy;
                this.order = query.order;
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
                this.$router.push({
                    query: {
                        ...this.filterData, ...this.paginationData,
                        orderBy: this.orderBy,
                        order: this.order
                    }
                });
            },

            // 排序方式发生变化
            sortChange(sort) {
                this.orderBy = sort.prop;
                this.order = sort.order;
                this.changeQuery();
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