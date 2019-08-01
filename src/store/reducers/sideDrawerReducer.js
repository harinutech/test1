import { GET_USER_DATA } from '../actions/actiontypes';
import { userConstants } from '../actions/actiontypes';
const intialState = {
    emp:{},
   // isTooltipActive: false
}

export default function getUserReducer (state = intialState,action){
    const {type,payload}=action;
    switch (type){
        case GET_USER_DATA:
        return{
            ...state,
            emp:payload,
        }
        default: 
        return state;
    }
}
