import {getToken, setToken, removeToken} from "../../common/auth";
import api from '@/common/request';
import router, {resetRouter} from '@/router';

import constRoutes from '@/router/constRoutes';
import curdRoutes from '@/router/curdRoutes';

const state = {
    token: getToken(), // 用户 Token
    userInfo: {}, // 用户信息
    routesArr: [], // 当前用户有权限的路由表
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_USERINFO: (state, userinfo) => {
        state.userInfo = userinfo;
    },
    SET_ROUTESARR: (state, routesArr) => {
        state.routesArr = routesArr;
    },
};

const actions = {

    // 登陆
    login({commit}, loginForm) {
        return new Promise(async (resolve, reject) => {
            const {resultCode, resultMessage, token} = await api.login(loginForm);
            if (resultCode == 0) {
                commit('SET_TOKEN', token);
                setToken(token);
            }
            resolve({resultCode, resultMessage, token});
        })
    },

    // 登出
    logout({commit, state}) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '');
            removeToken();
            commit('SET_USERINFO', {});
            resetRouter();
            resolve();
        })
    },

    // 刷新用户信息
    refreshUserInfo({commit, state}) {
        return new Promise(async (resolve, reject) => {
            const {resultCode, resultMessage, name, roles, pages} = await api.getUserInfo({token: state.token});
            if (resultCode == 0) {
                commit('SET_USERINFO', {name, roles, pages});
            }
            resolve({resultCode, resultMessage, name, roles, pages});
        });
    },

    // 添加用户有权限的路由表
    handleRoutes({commit}, routes) {
        return new Promise(resolve => {
            const re = constRoutes.concat(curdRoutes); // TODO
            commit('SET_ROUTESARR', re);
            router.addRoutes(curdRoutes);
            resolve(curdRoutes)
        });
    }
};

export default {
    state,
    mutations,
    actions
}

