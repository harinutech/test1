import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import HomeStateReducer from '../modules/home/HomeState';
import PostStateReducer from '../services/getPost';
import {LoginStateReducer,authentication} from './reducers/loginReducer';
import {registration} from './reducers/registrationReducer';
import setcomponentReducer from './reducers/componentReducer';
import ProjectStateReducer from './reducers/projectReducer';
import getUserReducer from './reducers/sideDrawerReducer'

export default combineReducers({
  router: routerReducer,
  home: HomeStateReducer,
  post: PostStateReducer, 
  loginDetails : LoginStateReducer,
  authentication:authentication,
  setcomponentReducer:setcomponentReducer,
  projects:ProjectStateReducer,
  registration:registration,
  getuser:getUserReducer,
});
