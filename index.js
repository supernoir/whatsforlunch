'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
//import Colorball from './Colorball';


// Giphy fun!
const giphy = require('giphy-api-without-credentials')();

let gif = () => {
    giphy.search({
	        q: 'Pizza',
	        rating: 'g'
        }, function(err, res) {
	        let randgif = res.data[0].images.downsized.url;
            console.log(randgif);
            return randgif
        });
}

gif();



class FoodGif extends React.Component{
    constructor(){
        super();
        this.state = {
            'gif' : 'http://i.imgur.com/LmXe2gA.gif'
        }
    }

    render(){
        return <div>
        <img src={this.state.gif} id="foodpic" />
        </div>
    }
}


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


	}

	render(){
		return(
        <div id="content">
        <h1>What's for lunch?</h1>
        <p>{this.state.food}</p>
        <FoodGif />
        <LunchItem/>
        <Randomizer />
        </div>
	);
	}
}



ReactDOM.render(<Lunch />, document.getElementById('App'));

export default Lunch;