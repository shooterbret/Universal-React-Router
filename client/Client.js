import React from 'react'
let { render } =  require('react-dom');
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from '../universal/Store'
//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
import Routes from './../universal/ReactRouter'

const client = (
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}>
        </Router>
    </Provider>
);

render(client, document.getElementById('Root'));