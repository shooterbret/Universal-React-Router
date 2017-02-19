/**
 * Created by shooterbret on 2/19/2017.
 */
require('react-dom');
import setStore, { history } from './Store';

//noinspection JSUnresolvedVariable
const preloadedState = window.__PRELOADED_STATE__;
const store = setStore(preloadedState);
const router = (
<Provider store={store}>
   <Router history={history}>
        {routes}
    </Router>
 </Provider>
);
render(router, document.getElementById('app'));