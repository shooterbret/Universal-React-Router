import React from 'react';

//let { render } = require('react-dom');

// Import css
//import css from './styles/style.styl';

// Import Components
import App from './components/App';
import SameApp from './components/routes/index'
//import Single from './components/Single';
//import PhotoGrid from './components/PhotoGrid';

// import react router deps
import {  Route, IndexRoute } from 'react-router';
//import { Provider } from 'react-redux';
//import setStore, { history } from './Store';
//noinspection JSUnresolvedVariable
//const preloadedState = window.__PRELOADED_STATE__;
//const store = setStore(preloadedState);
//<IndexRoute component={PhotoGrid}></IndexRoute>
//<Route path="/view/:postId" component={Single}></Route>
 const Routes = (
            <Route path="/" component={App}>
                <IndexRoute component={SameApp}></IndexRoute>
            </Route>
);
 export default Routes;
//const router = (
   // <Provider store={store}>
    //    <Router history={history}>
   //         {routes}
   //     </Router>
  //  </Provider>
//);
//render(router, document.getElementById('app'));