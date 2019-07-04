const getters = {
    sideBarStatus: state => state.app.sideBarStatus,
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    routesArr: state => state.user.routesArr,
    leftRoutes: state => state.user.leftRoutes,
    haveSetRouter: state => state.user.haveSetRouter,
};

export default getters
