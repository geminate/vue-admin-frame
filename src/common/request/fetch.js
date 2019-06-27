import Fly from 'flyio';
import utils from '../utils';
import config from '../../../config';

// HTTP 请求
class Http {
    constructor(config) {
        this.config = config;
        this.initRequest();
    }

    initRequest() {
        this.request = Fly;
        this.request.interceptors.request.use((request) => {
            request.headers['Content-Type'] = 'text/plain';
            request.timeout = this.config.timeout;
            request.baseURL = this.config.baseUrl;
            return request;
        })
    }

    fetch() {
        const reqUrl = this.config.url;
        return this.request.request(reqUrl, this.config.data, {
            method: this.config.method
        }).then(({data}) => {
            console.log(data)
            this.config.success && this.config.success(data);
        }).catch(e => {
            this.config.error();
        })
    }
}

const error = () => {
    utils.error(config.http.errorMessage);
};

const fetch = (configs) => {
    new Http({
        url: '',
        method: 'POST',
        data: {},
        success: null,
        error: error,
        timeout: config.http.timeout,
        baseUrl: config.http.baseUrl[process.env.NODE_ENV],
        ...configs
    }).fetch()
};

export default fetch;