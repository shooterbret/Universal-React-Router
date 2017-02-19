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


app.use(favicon(__dirname + '/public/favicon.ico')); //Handles FavIcon

app.get('*', function (req, res) {
    match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
        //REQUEST DB
    //     Object.freeze(renderProps);
    let store = setStore({
        posts: [
            {
                "code": "BAcyDyQwcXX",
                "caption": "Lunch #hamont",
                "likes": 56,
                "id": "1161022966406956503",
                "display_src": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
            }
        ], text: {
            "code": "BAcyDyQwcXX",
            "caption": "Lunch #hamont",
            "likes": 56,
            "id": "1161022966406956503",
            "display_src": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
        }
    });


    //Makes request here. We will set this up with mock data. You can also use plain mongo here
          console.log("ERROR FOUND: ");
         console.log(error);
    console.log("-------------------");
    console.log("Redirect Location" + redirectLocation);
    console.log("Request Location:" + req.url);
    console.log("-------------------");
    console.log(renderProps);
    console.log("BeginTesty");
    let testy = renderProps;
    console.log(testy);
    console.log("BeginTest2");
    let test2 = Object.assign({}, renderProps);
    console.log(test2);
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