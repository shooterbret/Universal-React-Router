import React from 'react'
let { render } =  require('react-dom');
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from '../universal/Store'
//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
import Routes from './../universal/ReactRouter'
import { AppContainer } from 'react-hot-loader'

const client = (newRoutes) => (
    render(
        <AppContainer>
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}>
        </Router>
    </Provider>
    </AppContainer>,
        document.getElementById('Root'))
);

//render(client, document.getElementById('Root'));
client(Routes);

if (module.hot) {
    console.log("CLIENT IS HOTTT");
    module.hot.accept('./../universal/ReactRouter', () => {
        const newRoutes = require('./../universal/ReactRouter').default;
        client(newRoutes)
    });
}