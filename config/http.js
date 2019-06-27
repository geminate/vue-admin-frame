const http = {
    baseUrl: {
        development: 'http://150.95.147.122:3001/mock/10',
        production: ''
    },
    timeout: 30000, // 请求的超时时间
    errorMessage: '网络异常，请稍后重试', // 默认的错误提示文案
};

export default http;