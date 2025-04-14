# Build and test APIs

* Create a project  
* Initialize project \-\> ```npm init -y  ```
* Install express \-\> ```npm i express```
* Install nodemon \-\> ```npm install nodemon \-D```
* Create the server file \-\> ```touch server.js```
* Open the server file and import express at the top \-\> ```import express from “express”;``` 
* To allow import on node files, add module on package.json \-\> ```“type”: “module”,``` 
* Add dev command on package.json \-\>```"dev": "nodemon server.js"```
* Initialize the express app, create the server \-\> ```const app \= express();```
* Define the port where the server will run \-\> ```const PORT  \=  3000```
* Create the listener \-\> ```app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})``` 
* Set the first route \-\>  ```app.get(‘/’, (req, res) => {res.send(“Welcome to our API!”)})```
* Run the server \-\> ```node server.js``` 
* Go to localhost \-\> you will be able to see your message  
* Add another route \-\>  ```app.get(‘/users’, (req, res) => { const users = [id: 1, name: “gloria”], [id:2, name: “tomas”]; res.json(users);})``` 
* Stop server \-\> ```control  c``` 
* Run server \-\> ```node server.js ```
* Go to localhost /users \-\> you will be able to see the response

# Post method
used to get data from the frontend to the backend, we will need to add first a middleware and then create the routes

* Create a middleware \-\> ```app.use(express.json())```
* Set the route requesting the body content \-\> ```app.post(“/users”, (req, res) => {const newUser = req.body; console.log(newUser); res.json({message: “User added successfully!”, use: newUser})})```


# Test using Insomnia or Postman**

* Is a good practice to create collections for project  
* Create a new request \-\> you can choose the option GET, POST, DELETE, etc  
* Be sure the server is running  
* Make a request type GET using the URL [http://localhost:3000](http://localhost:3000) \-\> you will get the message  
* Make a request type POST using the URL [http://localhost:3000](http://localhost:3000)/users, make sure the body is type json, kill and run again server,  add the body {“id”: 3, “name”: “mateo”} \-\> you will be able to see the added user successfully message
