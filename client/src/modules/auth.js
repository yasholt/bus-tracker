export const authModule = {
    isUserAdmin,
    isUserAuthenticated
};

function isUserAdmin(cookieUser) {
    if (cookieUser.userType) {
        return true;
    } else {
        return false;
    }
}

function isUserAuthenticated(cookieUser) {
    if (cookieUser) {
        return true;
    } else {
        return false;
    }
}