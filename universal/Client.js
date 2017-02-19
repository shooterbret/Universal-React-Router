/**
 * Created by shooterbret on 2/19/2017.
 */
let { render } = require('react-dom');
import setStore from './Store';
import Routes from "./ReactRouter"
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';



//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__; //Gets the preloaded state
const store = setStore(preloadedState);
syncHistoryWithStore(browserHistory, store);

const router = (
<Provider store={store}>
   <Router history={history}>
        {Routes}
    </Router>
 </Provider>
);
render(router, document.getElementById('app'));