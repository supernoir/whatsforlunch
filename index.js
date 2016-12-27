'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const giphy = require('giphy-api-without-credentials')();
const foods = ['Burgers','Pizza','Enchiladas','French Fries','Curry','Shawarma','Sushi'];

let randFood = () => {
	let rand = foods[Math.floor(Math.random()*foods.length)];
	return rand;
};


let randgifurl = (rand) => {
		giphy.search({
		q: rand,
		rating: 'g'
	}, function(err, res) {
		let reslength = res.data.length;
		let randkey = Math.floor(Math.random()*reslength);
		let resulturl = res.data[randkey].images.downsized.url;
		console.log(resulturl);
		return resulturl
	});
}

class FoodGif extends React.Component{
	constructor(props){
    	super(props);
    	this.state = {
    	'gif' : 'http://media2.giphy.com/media/54Uq0B4fUcVP2/giphy.gif'
        }
    }

    render(){
        return <div id="result">
		{randgifurl(randFood())}
		<img src={this.state.gif} id="foodpic" />
		<h2>{randFood()}</h2>
        </div>
    }
}

class Lunch extends React.Component{
	constructor(props){
		super(props);
		this.state = { food: 'Sushi' }
	}

/*
	componentDidMount(){
		fetch('http://localhost:3344/', {
	        method: 'get'
		}).then(function(res) {
	res.json().then(function(data) {  
		console.log('Fetches ' + data);
		this.setState({ food: data });
		}); 
	}).catch(function(err) {
	        console.log(err);
	});
}
*/

	render(){
		return(
        <div id="content">
        <a className="head">What's for Lunch?</a>
		<h2>{this.state.food}</h2>
		<FoodGif gif={randgifurl}/>
        </div>
	);
	}
}



ReactDOM.render(<Lunch food={foods} />, document.getElementById('App'));

export default Lunch;