import {getToken, setToken, getUserInfo, setUserInfo, getRoutesArr, setRoutesArr} from "../../common/auth";
import api from '@/common/request';
import router, {resetRouter} from '@/router';

import constRoutes from '@/router/constRoutes';
import asyncRoutes from '@/router/asyncRoutes';

const state = {
    token: getToken(), // 用户 Token
    userInfo: getUserInfo(), // 用户信息
    routesArr: getRoutesArr(), // 当前用户有权限的全部路由
    haveSetRouter: false, // 是否已将异步路由加入 router 中
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
        setToken(token);
    },
    SET_USERINFO: (state, userinfo) => {
        state.userInfo = userinfo;
        setUserInfo(userinfo);
    },
    SET_ROUTESARR: (state, routesArr) => {
        state.routesArr = routesArr;
        setRoutesArr(routesArr);
    },
    SET_HAVESETROUTER: (state, haveSetRouter) => {
        state.haveSetRouter = haveSetRouter;
    }
};

const actions = {

    // 登陆
    login({commit}, loginForm) {
        return new Promise(async (resolve, reject) => {
            const {resultCode, resultMessage, token} = await api.login(loginForm);
            if (resultCode == 0) {
                commit('SET_TOKEN', token);
            }
            resolve({resultCode, resultMessage, token});
        })
    },

    // 刷新用户信息
    refreshUserInfo({dispatch, commit, state}) {
        return new Promise(async (resolve, reject) => {
            const {resultCode, resultMessage, name, roles, pages} = await api.getUserInfo({token: state.token});
            if (resultCode == 0) {
                commit('SET_USERINFO', {name, roles, pages});
                dispatch('handleRoutes', pages)
            } else {
                commit('SET_TOKEN', '');
            }
            resolve({resultCode, resultMessage, name, roles, pages});
        });
    },

    // 添加用户有权限的路由表
    handleRoutes({commit}, permissionArr) {
        return new Promise(resolve => {
            const asyncPermissionRoutes = filterAsyncRoute(asyncRoutes, permissionArr);
            commit('SET_ROUTESARR', constRoutes.concat(asyncPermissionRoutes));
            router.addRoutes(asyncPermissionRoutes);
            commit('SET_HAVESETROUTER', true);
            resolve()
        });
    },

    // 登出
    logout({commit, state}) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '');
            commit('SET_USERINFO', {});
            commit('SET_ROUTESARR', []);
            commit('SET_HAVESETROUTER', false);
            resetRouter();
            resolve();
        })
    },
};

export default {
    state,
    mutations,
    actions
}

const filterAsyncRoute = (asyncRoutes, permissionArr) => {
    const res = [];
    asyncRoutes.forEach((item) => {
        const tmp = {...item};
        if (permissionArr.includes(tmp.name)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoute(tmp.children, permissionArr)
            }
            res.push(tmp)
        }
    });
    return res;
};

