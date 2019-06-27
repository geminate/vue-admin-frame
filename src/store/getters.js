const getters = {
    sideBarStatus: state => state.app.sideBarStatus,
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
};

export default getters
