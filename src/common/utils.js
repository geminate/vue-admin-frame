import {Message} from 'element-ui';

const utils = {

    // 展示 Toast
    toast: (message = '', duration = 3000, type = 'info') => {
        Message({message, duration, type});
    }
};

export default utils;