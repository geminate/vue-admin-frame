<template>
    <div class="login-page">
        <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="formRules">
            <h1>Login Title</h1>

            <el-form-item prop="username">
                <i class="input-icon el-icon-user-solid"></i>
                <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text" name="username"
                          autofocus></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <i class="input-icon el-icon-lock"></i>
                <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" name="password"
                          show-password></el-input>
            </el-form-item>

            <el-button type="primary" @click="handleLogin">Login</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: '', // 用户名
                    password: '', // 密码
                },

                formRules: {
                    username: [{trigger: 'blur', validator: this.$validate.validUsername}],
                    password: [{trigger: 'blur', validator: this.$validate.validPassword}]
                }
            }
        },
        methods: {

            // 登录按钮点击事件
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.$router.push(`/`);
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url('index.less');
</style>