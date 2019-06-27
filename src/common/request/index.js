import config from '../../../config';
import fetch from './fetch';

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