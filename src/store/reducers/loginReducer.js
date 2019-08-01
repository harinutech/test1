import { FETCH_LOGIN_DETAILS } from '../actions/actiontypes';
import { userConstants } from '../actions/actiontypes';
const intialState = {
    datas:[],
   // isTooltipActive: false
}

export default function LoginStateReducer (state = intialState,action){
    const {type,payload}=action;
    switch (type){
        case FETCH_LOGIN_DETAILS:
        return{
            ...state,
            datas:payload,
        }
        default: 
        return state;
    }
}



let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { 
        loggingIn: true, 
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}