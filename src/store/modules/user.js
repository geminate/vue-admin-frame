import {getToken, setToken, getUserInfo, setUserInfo} from "../../common/auth";
import api from '@/common/request';

const state = {
    token: getToken(),
    userInfo: getUserInfo()
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
        setToken(token);
    },
    SET_USERINFO: (state, userinfo) => {
        state.userinfo = userinfo;
        setUserInfo(userinfo);
    }
};

export default {
    state,
    mutations
}

