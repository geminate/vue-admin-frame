export const getToken = () => {
    return sessionStorage.getItem('token')
};

export const setToken = (token) => {
    return sessionStorage.setItem('token', token)
};

export const removeToken = () => {
    return sessionStorage.removeItem('token')
};

export const getUserInfo = () => {
    const infoStr = sessionStorage.getItem('userInfo');
    if (infoStr) {
        return JSON.parse(infoStr);
    } else {
        return {}
    }
};

export const setUserInfo = (userInfo) => {
    return sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const removeUserInfo = () => {
    return sessionStorage.removeItem('userInfo');
};