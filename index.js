'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let Randomizer = () => {
    return <div id="action"><a href="#" className="btn">Pick a Lunch Date!</a></div>
}

let LunchItem = () => {
    return(<div id="lunchItem">Pizza</div>);
}

class Lunch extends React.Component{
    componentDidMount(){
        fetch('http://127.0.0.1:3344/', {
	        method: 'get'
        }).then(function(res) {
       res.json().then(function(data) {  
        console.log(data);
        return data;
      });  
        }).catch(function(err) {
	        console.log(err);
        });
    }

    render(){
    return(
        <div id="content">
        <h1>What's for lunch?</h1>
        <LunchItem />
        <Randomizer />
        </div>
        );
    }
}



ReactDOM.render(<Lunch />, document.getElementById('App'));

export default Lunch;