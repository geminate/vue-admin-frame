const state = {
    sideBarOpen: localStorage.getItem('sideBarOpen') ? !!+localStorage.getItem('sideBarOpen') : true, // 侧边导航栏是否完全展开
};

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sideBarOpen = !state.sideBarOpen;
        if (state.sideBarOpen) {
            localStorage.setItem('sideBarOpen', 1);
        } else {
            localStorage.setItem('sideBarOpen', 0);
        }
    },
};

const actions = {
    toggleSideBar({commit}) {
        commit('TOGGLE_SIDEBAR')
    },
};

export default {
    state,
    mutations,
    actions
}
