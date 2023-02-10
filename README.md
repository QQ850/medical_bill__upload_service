# medical_bill_upload_service

This is a simple medical bills upload service using 

**Language**: Node

**Framework**: Express 

**Software tool**: Visual Studio Code (VSC)

**API testing tool**: Postman

## Endpoints
Two endpoints, and both of them accept and return JSON.
#### Items
    GET /items: returns a list of medical bills
    POST /items: creates a new medical bill
#### Files
    index.js            --> HTTP responses to each request 
    package.json        --> be able to run the API
    bills.json          --> Example of a list of array objects
#### Generated URL 
    http://localhost:3000/items
## Run the assignment on Postman 
### Steps:
1. Open terminal at VSC, and tyep "npm index.js" to start running the API
2. Once the server is running, open Postman to make a GET / POST request to the API.
     
     To do this, follow these steps:
                    
    * Select "GET" method from dropdown list, and type the URL "http://localhost:3000/items", then click "Send" --> below is the result on Postman
![image](https://user-images.githubusercontent.com/73051094/218036793-531b44a5-306b-44eb-a1e8-56591a749d77.png)

    
    * Select "POST" method, and typr the same URL as above, and choose "Body" and "raw" to create a JSON object. After than, click "send"
     
         ** NOTE: The raw JSON example can be found from **bills.json** file  
         ![image](https://user-images.githubusercontent.com/73051094/218038032-3a03f67f-1b0d-4da9-bba9-ef17ec58737b.png)
    
    * In order to check if the **POST** request has been reponsed correctly, select "GET" mehod to send a "GEt" request again to see any changes. 
     
     ![image](https://user-images.githubusercontent.com/73051094/218038522-bb7d1dff-09b9-4294-a4e0-d817901f5b80.png)

### Examine result
After done with the API tesing the actual result is the expected result. 
