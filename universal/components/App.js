import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators';
import Main from './routes/Root';



function mapStateToProps(state) {
    //Maps
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    //Binds Action creators (functions) to the dispatch
    return bindActionCreators(actionCreators, dispatch);
}
//Injects the state and the dispatch into the props. App is the new instance of modified main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
