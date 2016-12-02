'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
//import Colorball from './Colorball';


let Randomizer = () => {
	return <div id="action"><a href="#" className="btn">Pick a Lunch Date!</a></div>;
};

let LunchItem = () => {
	return <div id="lunchItem"></div>;
};


class Lunch extends React.Component{
	constructor(props){
	super(props);
	this.state = {
	'food': 'Burgers'
    };
}

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
	console.log(this.res);

}

	render(){
	return(
        <div id="content">
        <h1>What's for lunch?</h1>
        <p>{this.state.food}</p>
        <LunchItem/>
        <Randomizer />
        </div>
        );
}
}



ReactDOM.render(<Lunch />, document.getElementById('App'));

export default Lunch;