const state = {
    sideBarStatus: localStorage.getItem('sideBarStatus') ? !!+localStorage.getItem('sideBarStatus') : true, // 侧边导航栏是否完全展开
};

const mutations = {
    SET_SIDE_BAR_STATUS: (state, sideBarStatus) => {
        state.sideBarStatus = sideBarStatus;
        if (state.sideBarStatus) {
            localStorage.setItem('sideBarStatus', 1);
        } else {
            localStorage.setItem('sideBarStatus', 0);
        }
    },
    TOGGLE_SIDEBAR: state => {
        state.sideBarStatus = !state.sideBarStatus;
        if (state.sideBarStatus) {
            localStorage.setItem('sideBarStatus', 1);
        } else {
            localStorage.setItem('sideBarStatus', 0);
        }
    },
};

const actions = {
    toggleSideBar({commit}) {
        commit('TOGGLE_SIDEBAR')
    },
    hideSideBar({commit}) {
        commit('SET_SIDE_BAR_STATUS', true)
    },
    showSideBar({commit}) {
        commit('SET_SIDE_BAR_STATUS', false)
    }
};

export default {
    state,
    mutations,
    actions
}
