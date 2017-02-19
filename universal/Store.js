/**
 * Created by shooterbret on 2/13/2017.
 */
import { createStore,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import axios from 'axios';
// import the root reducer
import rootReducer from './components/reducer/rootreducer';

//import comments from './data/comments';
//import posts from './data/posts';


//Axios? Is this client side? Server side? I think its both

// create an object for the default data

// Mabye return the store on an Async Call with axios? Why use axios on server side? is this even a good practice?
let setStore = (PreState) =>
{return createStore(rootReducer, PreState, applyMiddleware(thunk))};
export default setStore;
