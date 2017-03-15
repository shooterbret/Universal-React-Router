/**
 * Created by shooterbret on 2/14/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//let s = require('../../../styles/main.scss');

const Main = React.createClass({
    render() {
        return (
            <div>
                    <h1>Hello World
                    </h1>
                <Link to="/pagetwo">page</Link>
            </div>
        )
    }
});

export default Main;