const isUserAdmin = (cookieUser) => {
    if (cookieUser.userType) {
        return true;
    } else {
        return false;
    }
};
const isUserAuthenticated = (cookieUser) => {
    if (cookieUser) {
        return true;
    } else {
        return false;
    }
};

const getMatchUrl = (cookieUser) => {
    if (cookieUser.userType) {
        return 'admin';
    } else {
        return 'driver';
    }
};

export const authModule = {
    isUserAdmin,
    isUserAuthenticated,
    getMatchUrl
};
