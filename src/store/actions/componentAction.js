import {FETCH_COMP_ACTION,OPEN_INSIDE_DRAWER,CLOSE_INSDE_DRAWER} from './actiontypes';
  
export const setcomponentaction = () => dispatch => {   
           
            return dispatch ({
                type:FETCH_COMP_ACTION,
                
            })           
    }

export const openinsidedrawer = () => dispatch => {

    return dispatch ({
        type:OPEN_INSIDE_DRAWER,
        
    })    

}

export const closeinsidedrawer = () => dispatch => {

    return dispatch ({
        type:CLOSE_INSDE_DRAWER,
        
    })    

}
