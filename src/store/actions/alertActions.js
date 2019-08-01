import { alertConstants } from './actiontypes';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    console.log("sucess"+message);
    return { type: alertConstants.SUCCESS, message };
} 

function error(message) {
    console.log("alertAction " + message);
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}