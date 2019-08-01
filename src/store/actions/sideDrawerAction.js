import {GET_USER_DATA} from './actiontypes';
import axios from 'axios';
import config from '../../config.json'



export const getUserAction = (id) => dispatch => {   
    // const requestBody = {
    //     Eid:id,       
    // }
    const pmAPI = config.api_url+"/getemp/"+id;
    axios.get(pmAPI).then(      
        res=>{
            let {Employee}= res.data;            
            return dispatch ({
                type:GET_USER_DATA,
                payload:Employee,
            })           
    }).catch(err => {
        console.log(err);
        throw new Error('Could not fetch Employee Details. Try again later.');
    });
}