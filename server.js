'use strict'

const express  = require('express');
const app = express();
const http = require('http');
const fs = require('fs')  


let content;

try {  
  content = fs.readFileSync('data.json', 'utf-8')
} catch (err) {
  console.log(err)
}
console.log(content)  


let getLunchOptions = () => {
   console.log('Hello World');
}

getLunchOptions();

let port = 3344 || process.env.PORT;
app.listen(port);
console.log(`Server listening on ${port}`);

