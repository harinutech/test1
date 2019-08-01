import { FETCH_PROJECT_ACTION } from '../actions/actiontypes';

const intialState = {
    datas:[],
   // isTooltipActive: false
}

export default function ProjectStateReducer (state = intialState,action){
    const {type,payload}=action;
    
    switch (type){
        case FETCH_PROJECT_ACTION:
            
        return{
            ...state,
            datas:payload,
        }
        default:
               
        return state;
    }
}
