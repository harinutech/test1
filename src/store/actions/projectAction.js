import {FETCH_PROJECT_ACTION} from './actiontypes';
import axios from 'axios';
import config from '../../config.json'

const pmAPI = config.api_url+"/getproject";
console.log(config.api_url);
  
export const fetchprojectdetails = () => dispatch => {   
    
    axios.get(pmAPI).then(      
        res=>{
            let {result}= res.data;            
            return dispatch ({
                type:FETCH_PROJECT_ACTION,
                payload:result,
            })           
    }).catch(err => {
        console.log(err);
        throw new Error('Could not fetch products. Try again later.');
    });
}
