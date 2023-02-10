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
    index.js                    --> HTTP responses to each request 
    package.json                --> be able to run the API
    bills.json                  --> Example of a list of array objects
    Testing.postman_collection  --> API testing files exported from Postman
#### Generated URL 
    http://localhost:3000/items
## Run the assignment on Postman 
### Steps:
1. Open terminal at VSC, and tyep "npm index.js" to start running the API
2. Once the server is running, open Postman to make a GET / POST request to the API.
     
     To do this, follow these steps:
                    
    * Select "**GET**" method from dropdown list, and type the URL "http://localhost:3000/items", then click "Send" --> below is the result on Postman
![image](https://user-images.githubusercontent.com/73051094/218188066-5e5d2ef3-331b-4da7-a757-137f23271c3e.png)


    
    * Select "**POST**" method, and typr the same URL as above, and choose "Body" and "raw" to create a JSON object. After than, click "send"
     
         ** NOTE: The raw JSON example can be found from **bills.json** file  
        ![image](https://user-images.githubusercontent.com/73051094/218203805-f50365dc-d003-49b0-bb27-3d7bb0fd939b.png)

    
    * In order to check if the **POST** request has been reponsed correctly, select "GET" mehod to send a "GET" request again to see any changes. 
     
     ![image](https://user-images.githubusercontent.com/73051094/218188251-81da763b-7f8f-4f22-b23b-128a2b3a5da1.png)

     
     * After all the testing, back to VSC terminal, type "Ctrl + C" to kill the API running

### Examine result
After done with the API tesing the actual result is the expected result. 
