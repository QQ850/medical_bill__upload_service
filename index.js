// import express and call express()
const express = require('express');
const app = express();

//create an empty array objects
let items = [];

//receive JSON data in API and access it as a JavaScript object 
//and parse JSON data in the request body
app.use(express.json());


//Called for GET request to http://localhost:3000/items
//sent the items
app.get('/items', (req, res) => {
  res.send(items);
});


// Called for POST request to http://localhost:3000/items
app.post('/items', (req, res) => {
    //create a new object 
    //and push it to the array --> items
    let item = req.body;   
    items.push(item); 
    res.send(item);
});

//port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
