'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let Food = () => {

}

let LunchItem = () => {
    return(<div>Pizza</div>);
}

class Lunch extends React.Component{
    componentDidMount(){
        fetch('http://127.0.0.1:3344/', {
	        method: 'get'
        }).then(function(res) {
       res.json().then(function(data) {  
        console.log(data);
      });  
        }).catch(function(err) {
	        console.log(err);
        });
    }

    render(){
    return(
        <div>
        <h1>These are your choices</h1>
        <LunchItem/>
        </div>
        );
    }
}



ReactDOM.render(<Lunch />, document.getElementById('App'));

export default Lunch;