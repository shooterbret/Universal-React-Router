/**
 * Created by shooterbret on 2/28/2017.
 */
let router = require('express').Router();
import renderFullPage from '../template';
import setStore from "../universal/Store";
import {match, RouterContext, StaticRouter} from 'react-router';
import Routes from '../universal/ReactRouter';
import {Provider} from 'react-redux';
import React from 'react'
let {renderToString} = require('react-dom/server');
//import WithStylesContext from './WithStylesContext';

router.get('/text', function (req, res) {
    res.send("This is a client side request using axios.")
});
router.get('*', function (req, res) {
    const css = []; // CSS for all rendered React components

    match({routes: Routes, location: req.url}, (error, redirectLocation, renderProps) => {
        console.log("MATCHING WORKING");
        console.log(JSON.stringify(renderProps.params));
        //Handle Error Messages https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md
        //REQUEST DB
        let store = setStore({posts: "This is the Redux Default Store Talking"});
        //Makes request here. We will set this up with mock data. You can also use plain mongo here
        console.log("-------------------");
        console.log("Redirect Location" + redirectLocation);
        console.log("Request Location:" + req.url);
        // console.log("Render Props: " + renderProps);
        console.log("-------------------");
        let initialRender = renderToString(
            /*
             https://github.com/koriym/Koriym.Baracoa Server side uses store with context
             https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering Routes setup
             http://knowbody.github.io/react-router-docs/api/RouterContext.html Explains routercontext
             // https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md explains Match
             */
            //PRERENDER HISTORY IS PISSING. CORRECT WHEN POSSIBLE https://github.com/kriasoft/isomorphic-style-loader/issues/15 USES HISTORY ON BOTH
          //  <WithStylesContext onInsertCss={styles => css.push(styles._getCss())}>
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
           // </WithStylesContext>
        );
        let finalState = store.getState();
        let debuggo = renderFullPage(initialRender, finalState, css);
        res.send(debuggo);

    });


});
module.exports = router;