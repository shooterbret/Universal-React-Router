/**
 * Created by shooterbret on 2/21/2017.
 */
/**
 * Created by shooterbret on 2/14/2017.
 */
import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
//import withStyles from 'isomorphic-style-loader/lib/withStyles';

//const s = require('../../../styles/main.scss');
const image = require("./strange.jpg");

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "Loading..."}
    }

    componentDidMount() {
        axios.get('/text')
            .then((response) =>
            {
                console.log(response.data);
                this.setState({text: response.data});
            });
    }

    render() {
        return (
            <div>
                <h1>Hello World, welcome to page 2</h1>
                <img src={image}/>
                ||{this.state.text}||

                <div id="Redux Store Testing">
                    Hello <br/>
                    {this.props.posts} <br/>
                    <button onClick={() => this.props.AddText('I CLICKED A BUTTON!')}> This Button Will Set text
                    </button>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{ return {posts: state.posts}},(dispatch)=>{return bindActionCreators(actionCreators, dispatch)})(Main);