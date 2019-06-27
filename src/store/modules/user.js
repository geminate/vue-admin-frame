import {getToken, setToken} from "../../common/auth";
import api from '@/common/request';

const state = {
    token: getToken()
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
        setToken(token);
    }
};

const actions = {

    // 登陆
    login({commit}, loginInfo) {
        return new Promise(async (resolve, reject) => {
            const {resultCode, resultMessage, token} = await api.login(loginInfo);
            if (resultCode == 0) {
                commit('SET_TOKEN', token);
                resolve();
            } else {
                reject(resultMessage);
            }
        });
    },

    // 登出
    logout({commit}) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '');
            resolve();
        });
    }
};

export default {
    state,
    mutations,
    actions
}

