/**
 * Created by shooterbret on 2/14/2017.
 */
import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
    render() {
        return (
            <div>
                    <h1>Hello Worlds
                    </h1>
                <Link to="/pagetwo">page</Link>
            </div>
        )
    }
});

export default Main;