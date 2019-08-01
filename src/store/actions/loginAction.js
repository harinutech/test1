import {FETCH_LOGIN_DETAILS} from './actiontypes';
import axios from 'axios';
import config from '../../config.json'

const pmAPI = config.api_url+"/login";

export const fetchlogondetails = () => dispatch => {   
    const requestBody = {
        Email:'dinesh@gmail.com',
        Password:'welcome'
    }
    axios.post(pmAPI,requestBody).then(      
        res=>{
            let {token}= res.data;            
            return dispatch ({
                type:FETCH_LOGIN_DETAILS,
                payload:token,
            })           
    }).catch(err => {
        console.log(err);
        throw new Error('Could not fetch products. Try again later.');
    });
}
