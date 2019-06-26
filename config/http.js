const http = {
    baseUrl: {
        development: '',
        production: ''
    },
    timeout: 30000, // 请求的超时时间
    errorMessage: '网络异常，请稍后重试', // 默认的错误提示文案
};

export default http;