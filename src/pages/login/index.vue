<template>
    <div class="login-page">
        <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="formRules">
            <h1>登录页</h1>

            <el-form-item prop="username">
                <i class="input-icon el-icon-user-solid"></i>
                <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text" name="username"
                          autofocus autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <i class="input-icon el-icon-lock"></i>
                <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" name="password"
                          show-password></el-input>
            </el-form-item>

            <el-button type="primary" @click="handleLogin" :disabled="logining">{{logining ? '登陆中...' : '登陆'}}
            </el-button>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                loginForm: { // 表单数据
                    username: '', // 用户名
                    password: '', // 密码
                },
                formRules: {  // 校验规则
                    username: [{trigger: 'blur', validator: this.$validate.validUsername}],
                    password: [{trigger: 'blur', validator: this.$validate.validPassword}]
                },
                logining: false // 是否正在登陆中
            }
        },
        methods: {
            ...mapActions(['login', 'refreshUserInfo']),

            // 登录按钮点击事件
            async handleLogin() {
                this.$refs.loginForm.validate(async valid => {
                    if (valid) {
                        this.logining = true;
                        await this.doLogin();
                        this.logining = false;
                    }
                });
            },

            // 登陆
            async doLogin() {
                const {resultCode, resultMessage, token} = await this.login(this.loginForm);
                if (resultCode == 0) {
                    await this.doRefreshUserInfo();
                } else {
                    this.$utils.error(resultMessage);
                }
            },

            // 获取用户信息
            async doRefreshUserInfo() {
                const {resultCode, resultMessage} = await this.refreshUserInfo();
                if (resultCode == 0) {
                    this.$router.push('/');
                } else {
                    this.$utils.error(resultMessage);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>