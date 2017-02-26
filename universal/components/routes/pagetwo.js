/**
 * Created by shooterbret on 2/21/2017.
 */
/**
 * Created by shooterbret on 2/14/2017.
 */
import React from 'react';
import axios from 'axios';
//require('../../../styles/main.scss');

    let image =  require("./strange.jpg");
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: "Loading..."}
    }
    componentDidMount(){
        axios.get('/text')
            .then((response) =>{
            console.log(response.data);
                this.setState({text:response.data});
            });
    }
    render() {
        return (
            <div>
                <h1>Hello World, welcome to page 2</h1>
                ||{this.state.text}||
                <img src={image}/>
            </div>
        )
    }
}

export default Main;