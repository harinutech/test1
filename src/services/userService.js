//import config from 'config';
import { authHeader } from './helpers';
import config from '../config.json'
import axios from 'axios';
const pmAPI = config.api_url+"/login";
const registerAPI = config.api_url+"/empreg";

export const userService = { 
    login,
    logout,
    register
};

function login(email, password) {
        const requestBody = {
            Email:email,
            Password:password
        }
        return   axios.post(pmAPI,requestBody).then(      
            res=>{
                let {token}= res.data;            
                if (res.data) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(token));
                }
    
                return res;         
        }).catch(err => {
            console.log(err.response.data.error);
            throw (err.response.data.error);
         });
} 

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) { 
    const requestBody = { 
        First_Name:user.firstName,
        Last_Name:user.firstName,
        Emp_No:user.employeeno,
        Nick_Name:user.nickName,
        Email:user.email,
        Password:user.password,
        Emp_Role:user.role,
        Contact_No:user.contact
    }

    return axios.post(registerAPI,requestBody).then(function(response) {
        console.log("sucess service",response.data.status);
        return response.data.status;
    }).catch(err => {
        console.log("error",err.response.data.error);
        throw (err.response.data.error);
     });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}