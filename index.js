// import express and call express()
const express = require('express');
const app = express();

//create an initial array objects
let items = [
  {
    "id": 1,
    "name": "Tesla",
    "address": "NK",
    "hospital_name": "UW Medicine",
    "date_of_service": "02/09/2020",
    "bill_amount": 10
  },
  {
    "id": 2,
    "name": "Bob",
    "address": "TA",
    "hospital_name": "UW Medicine",
    "date_of_service": "12/09/2010",
    "bill_amount": 20
  },
];

//receive JSON data in API and access it as a JavaScript object 
//and parse JSON data in the request body
app.use(express.json());


//Called for GET request to http://localhost:3000/items
//sent the items
app.get('/items', (req, res) => {
   //format the display of the array objects in a table
    
    res.set('Content-Type', 'application/json');
    //add spacer in the stringify parameter to format the output
    //so that it's eady to read 
    res.send(JSON.stringify(items, null, 2));
});



// Called for POST request to http://localhost:3000/items
//push the new object to array 
app.post('/items', (req, res) => {
    //create a new object 
    //and push it to the array --> items
    const newItem = {id: items.length + 1, 
                      name: req.body.name,
                      address: req.body.address,
                      hospital_name: req.body.hospital_name,
                      date_of_service: req.body.date_of_service,
                      bill_amount: req.body.bill_amount
                    }; 
    items.push(newItem); 
    res.end();
});

//port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
