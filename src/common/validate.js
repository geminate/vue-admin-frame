const validate = {

    // 用户名 不为空
    validUsername(rule, value, callback) {
        if (value.length === 0) {
            callback(new Error('用户名不能为空'))
        } else {
            callback()
        }
    },

    // 密码 不为空
    validPassword(rule, value, callback) {
        if (value.length === 0) {
            callback(new Error('密码不能为空'))
        } else {
            callback()
        }
    }
};

export default validate;