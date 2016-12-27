'use strict';

// Setup

const express  = require('express');
const app = express();
const http = require('http');
const fs = require('fs');  
const morgan = require('morgan');
const cors = require("cors");


// CORS
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");  
  next();      
});

// File

let content = {};

try {  
	content = fs.readFileSync('data.json', 'utf-8');
} catch (err) {
	console.log(err);
}
console.log(content);  


app.get('/', (req, res) => {
	try {
		console.log(res.statusCode);
	res.json(content);
} catch (err) {
	res.send('Error');
}
});


let port = 3344 || process.env.PORT;

app.listen(port, (err) => {  
	if (err) {
		return console.log(`An Error occured: ${err}`, err);
	}
});

console.log(`Server listening on ${port}`);

