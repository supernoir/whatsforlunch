'use strict';

const express  = require('express');
const app = express();
const http = require('http');
const fs = require('fs');  
const morgan = require('morgan');


let content = {};

try {  
	content = fs.readFileSync('data.json', 'utf-8');
} catch (err) {
	console.log(err);
}
console.log(content);  


app.get('/', (req, res) => {
	try {
	res.send(content);
} catch (err) {
	res.send('Error');
}
});


let port = 3344 || process.env.PORT;

app.listen(port, (err) => {  
	if (err) {
		return console.log('An Error occured: ', err);
	}
});

console.log(`Server listening on ${port}`);

