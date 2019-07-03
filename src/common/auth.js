export const getToken = () => {
    return sessionStorage.getItem('token') || '';
};

export const setToken = (token) => {
    return sessionStorage.setItem('token', token)
};

export const getUserInfo = () => {
    const infoStr = sessionStorage.getItem('userInfo');
    if (infoStr) {
        return JSON.parse(infoStr);
    } else {
        return {};
    }
};

export const setUserInfo = (userInfo) => {
    return sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const getRoutesArr = () => {
    const routesArr = sessionStorage.getItem('routesArr');
    if (routesArr) {
        return JSON.parse(routesArr);
    } else {
        return [];
    }
};

export const setRoutesArr = (routesArr) => {
    return sessionStorage.setItem('routesArr', JSON.stringify(routesArr));
};
