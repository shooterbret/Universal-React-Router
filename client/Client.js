import React from 'react'
let {render} =  require('react-dom');
import {Provider} from 'react-redux'
//import {Router} from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../universal/Store'
//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
import Routes from './../universal/ReactRouter'
import {AppContainer} from 'react-hot-loader'
import WithStylesContext from './../server/WithStylesContext';
const css = [];
console.log("________________________");
console.log(Routes);
// <WithStylesContext onInsertCss={styles => css.push(styles._insertCss())}>
console.log("________________________");
const client = (newRoutes) => {
    (
        render(
            <AppContainer>
                    <Provider store={store}>

                        <BrowserRouter children={Routes()}/>
                    </Provider>
            </AppContainer>
            ,
            document.getElementById('Root'))

    );
    console.log(css);
};

//render(client, document.getElementById('Root'));
client(Routes);//https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
//console.log(css);
if (module.hot) { //Always runs when hot is enabled. Simply checks if hot is on the client
    console.log("CLIENT IS HOTTT");
    module.hot.accept('./../universal/ReactRouter', () => { //Accept updates from here and..
//Very broken. Watch These https://github.com/frenzzy/react-starter-kit/commit/2a4b934d23d83bdfd7fa28b191aad625eea0e249
        //https://github.com/kriasoft/isomorphic-style-loader/issues/68
        //https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
//https://webpack.github.io/docs/hot-module-replacement.html
        const newRoutes = require('./../universal/ReactRouter').default;
       client(newRoutes); // Inject the updates (reloads (or reinjects) entire page)
    });
}