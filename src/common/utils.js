import {Message} from 'element-ui';

// 工具方法
const utils = {

    info: (message = '', duration = 3000) => {
        Message({message, type: 'info', duration});
    },

    success: (message = '', duration = 3000) => {
        Message({message, type: 'success', duration});
    },

    error: (message = '', duration = 3000) => {
        Message({message, type: 'error', duration});
    },
};

export default utils;