import { history } from '../../services/helpers.js';
import { userService } from '../../services/userService.js';
import {userConstants} from '../actions/actiontypes'
import {alertActions} from '../actions/alertActions'

export const userActions = {
    login,
    logout, 
    register 
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        dispatch(alertActions.clear());
        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user)); 
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        dispatch(alertActions.clear());
        userService.register(user)
            .then( 
                user => {  
                    dispatch(success(user));
                    history.push('/user');
                    dispatch(alertActions.success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            ); 
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}