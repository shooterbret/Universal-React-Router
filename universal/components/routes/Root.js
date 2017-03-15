/**
 * Created by shooterbret on 2/14/2017.
 */
import { Link } from 'react-router-dom';
import React from 'react';
import {  Route } from 'react-router';
// {React.cloneElement(this.props.children, this.props)}
import index from './index';
//import SameApp from './components/routes/Root'
import pagetwo from './pagetwo'
const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                <Route exact path="/" component={index}/>
                <Route path="/pagetwo" component={pagetwo}/>
            </div>
        )
    }
});

export default Main;