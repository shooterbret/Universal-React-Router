import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './reducers/posts';
//import comments from './comments';
//RouterReducer is apart of react-router-redux library. It is used log dispatch events
//library is used for time traveling
const rootReducer = combineReducers({posts});
//,  routing: routerReducer
//Killed , routing: routerReducer for now
export default rootReducer;

//Routes.js - Default store
//RootReducer - Combines all reducer files
///reducers/ - Actual reducer
//App.js - Maps state to props
//Action Creators