const getters = {
    sideBarStatus: state => state.app.sideBarStatus,
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    routesArr: state => state.user.routesArr,
};

export default getters
