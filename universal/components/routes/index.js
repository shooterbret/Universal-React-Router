/**
 * Created by shooterbret on 2/14/2017.
 */
import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
    render() {
        return (
            <div>
                    <h1>Hello World</h1>
                <Link to="/pagetwo">page2</Link>
            </div>
        )
    }
});

export default Main;