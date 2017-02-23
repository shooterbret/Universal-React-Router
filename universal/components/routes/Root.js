/**
 * Created by shooterbret on 2/14/2017.
 */
import { Link } from 'react-router';
import React from 'react';


const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;