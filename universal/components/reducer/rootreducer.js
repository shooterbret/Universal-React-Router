import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

import posts from './reducers/posts';
import text from './reducers/text';
//import comments from './comments';
//RouterReducer is apart of react-router-redux library. It is used log dispatch events
//library is used for time traveling
const rootReducer = combineReducers({posts, text});
//Killed , routing: routerReducer for now
export default rootReducer;
