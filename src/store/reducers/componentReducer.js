import { FETCH_COMP_ACTION,OPEN_INSIDE_DRAWER,CLOSE_INSDE_DRAWER} from '../actions/actiontypes';

const intialState = {
    open:true,
    setOpen:true,
    setOpenInside:false,
   
}

export default function setcomponentReducer (state = intialState,action){
    const {type}=action;
    switch (type){
        case FETCH_COMP_ACTION:
        return{
            ...state,
            open:!state.open,
            setOpen:!state.setOpen,

        }
        case OPEN_INSIDE_DRAWER:
                return{
                    ...state,                  
                    setOpenInside:true,        
                }
        case CLOSE_INSDE_DRAWER:
                return{
                    ...state,                  
                    setOpenInside:false,        
                }
        default:
        return state;
    }
}
