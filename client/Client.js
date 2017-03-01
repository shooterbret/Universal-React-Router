import React from 'react'
let {render} =  require('react-dom');
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router';
import configureStore from '../universal/Store'
//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
import Routes from './../universal/ReactRouter'
import {AppContainer} from 'react-hot-loader'
import WithStylesContext from './../server/WithStylesContext';
const css = [];
const client = (newRoutes) => {
    (
        render(
            <AppContainer>

                    <Provider store={store}>
                        <WithStylesContext onInsertCss={styles => css.push(styles._insertCss())}>
                        <Router history={browserHistory} routes={Routes}>
                        </Router>
                        </WithStylesContext>
                    </Provider>
            </AppContainer>
            ,
            document.getElementById('Root'))

    );
    console.log(css);
};

//render(client, document.getElementById('Root'));
client(Routes);
//console.log(css);
if (module.hot) { //Always runs when hot is enabled. Simply checks if hot is on the client
    console.log("CLIENT IS HOTTT");
    module.hot.accept('./../universal/ReactRouter', () => { //Accept updates from here and..

        const newRoutes = require('./../universal/ReactRouter').default;
        client(newRoutes); // Inject the updates (reloads (or reinjects) entire page)
    });
}