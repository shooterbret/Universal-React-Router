import React from 'react';

// Import css
//import css from './styles/style.styl';

// Import Components
import App from './components/App';
import SameApp from './components/routes/index'
import pagetwo from './components/routes/pagetwo'
// import react router deps
import {  Route, IndexRoute } from 'react-router';
//<Route path="/view/:postId" component={Single}></Route>
 const Routes = (
     <div>
            <Route path="/" component={App}>
                <IndexRoute component={SameApp}></IndexRoute>
                <Route path="/pagetwo" component={pagetwo}></Route>
            </Route>
     </div>
);
export default Routes;