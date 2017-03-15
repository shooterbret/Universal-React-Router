import React from 'react';

// Import css
//import css from './styles/style.styl';

// Import Components
//import App from './components/App';
import SameApp from './components/routes/Root';
//import pagetwo from './components/routes/pagetwo'
// import react router deps
//<Route path="/view/:postId" component={Single}></Route>

import {  Route } from 'react-router';
 const Routes = () => (
     <div>
            <Route path="/" component={SameApp}/>
     </div>
);
export default Routes;