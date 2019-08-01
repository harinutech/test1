import { userConstants } from '../actions/actiontypes';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        user:action.user
        
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }  
}