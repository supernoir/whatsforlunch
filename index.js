'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
//import Colorball from './Colorball';


const giphy = require('giphy-api-without-credentials')();
const foods = ['Burgers','Pizza','Enchiladas','French Fries','Curry','Shawarma','Sushi'];

let randFood = () => {
	let rand = foods[Math.floor(Math.random()*foods.length)];
	return rand
}



let randgifurl = (rand) => {
		return giphy.search({
		q: rand,
		rating: 'g'
	}, function(err, res) {
		let reslength = res.data.length;
		let randkey = Math.floor(Math.random()*reslength);
		let resulturl = res.data[randkey].images.downsized.url;
		console.log(resulturl);
		return resulturl
	})
}

let trythis = (rand) => {
	console.log("Hello" + randgifurl(rand));
}

trythis();


class FoodGif extends React.Component{
    constructor(){
        super();
        this.state = {
            'gif' : 'http://media2.giphy.com/media/54Uq0B4fUcVP2/giphy.gif'
        }
    }

    render(){
        return <div id="result">
		{console.log(randgifurl(randFood()))}
        <img src={this.state.gif} id="foodpic" />
		<h2>{randFood()}</h2>
        </div>
    }
}


let Randomizer = () => {
	return <div id="action"><a href="#" className="btn">Pick a Lunch Date!</a></div>;
};



class Lunch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		'food': 'Pizza'
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


	}

	render(){
		return(
        <div id="content">
        <a className="head">What's for Lunch?</a>
        <FoodGif />
        </div>
	);
	}
}



ReactDOM.render(<Lunch />, document.getElementById('App'));

export default Lunch;