import Fly from 'flyio';
import utils from './utils';
import config from '../../config';

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
        this.config.showLoading && this.config.showLoadingFun();
        const reqUrl = this.config.url;
        return this.request.request(reqUrl, this.config.data, {
            method: this.config.method
        }).then(({data}) => {
            this.config.success && this.config.success(data);
            this.config.showLoading && this.config.hideLoadingFun();
        }).catch(e => {
            this.config.error();
        })
    }
}

const error = () => {
    utils.toast(config.http.errorMessage)
};

const fetch = (configs) => {
    new Http({
        url: '',
        method: 'POST',
        data: {},
        success: null,
        error: error,
        showLoading: true,
        showLoadingFun: utils.showLoading,
        hideLoadingFun: utils.hideLoading,
        timeout: config.http.timeout,
        baseUrl: config.http.baseUrl[process.env.NODE_ENV],
        ...configs
    }).fetch()
};

const apiFetch = {};

const fetchPromise = (url, data, method, options) => {

    return new Promise((resolve, reject) => {
        fetch({
            url: url,
            data: data,
            method: method,
            success: resolve,
            ...options
        })
    })
};

for (let key in config.api) {
    apiFetch[key] = async (params = {}, options = {}, method = 'post') => {
        const url = config.api[key];
        return await fetchPromise(url, params, method, options);
    };
}

export default apiFetch;