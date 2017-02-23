let express = require('express');
import React from 'react'
let { renderToString } = require('react-dom/server');
let app = express();
import renderFullPage from '../template';
import setStore from "../universal/Store";
import { match, RouterContext} from 'react-router';
import Routes from '../universal/ReactRouter';
import { Provider } from 'react-redux';
let favicon = require('serve-favicon');
import webpack from 'webpack';
const webpackMiddleware = require("webpack-dev-middleware");
app.use(favicon(__dirname + './../public/favicon.ico')); //Handles FavIcon
app.use(express.static('public'));


if ( app.get('env') === 'development' ) {
    app.use(webpackMiddleware(webpack(require('../webpack/webpack.config'))));
}else if (app.get('env') === 'production'){
}
app.get('/text', function (req, res) {
    res.send("This is server side text.")
});
app.get('*', function (req, res) {
    match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
        //REQUEST DB
    //     Object.freeze(renderProps);
    let store = setStore({});

       //console.log(global.webpack_isomorphic_tools.assets());


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
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );
    let finalState = store.getState();
    res.send(renderFullPage(initialRender, finalState))

    });


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});