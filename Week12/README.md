# Node js and Express Debugging and Testing Lesson

- On VScode find the debugger button on the left vertical menu.  
- Create a file that point the debugger to the server.js file \-\>  
  - Click on create a launch.json file   
  - select Node.js  
  - Close all browser open (localhost)  
- Run debugger at the top button  
- Set breakpoints \-\> click in front of the line you want to stop code execution  
- A menu should be display at the top with option go to next breakpoint, stop, restart, etc.  
- Open browser to trigger the function \-\> localhost:3000/crimes  
- Now you would be able to inspect data on VSCode on the breakpoints previously added

Using these breakpoints, on the VS Code editor, allows checking if/which data is being received in any part of the execution.


# Setting Up PostgreSQL and pgAdmin with Docker

- After installing Docker Desktop and install docker VScode extention, docker desktop should be running  
- Create the docker-compose.yml, creating 2 docker container (postgress, pgadmin)   
  Here a docker-compose.yml example:
``` 
  services:  
   postgres:  
     image: postgres:latest  
     environment:  
       POSTGRES\_USER: student  
       POSTGRES\_PASSWORD: password  
       POSTGRES\_DB: school  
     ports:  
       \- "5432:5432"  
     volumes:  
       \- postgres\_data:/var/lib/postgresql/data  
    
   pgadmin:  
     image: dpage/pgadmin4  
     environment:  
       PGADMIN\_DEFAULT\_EMAIL: admin@example.com  
       PGADMIN\_DEFAULT\_PASSWORD: admin  
     ports:  
       \- "8080:80"  
     depends\_on:  
       \- postgres  
    
  volumes:  
   postgres\_data:  
```
- Run docker in the folder were the docker-compose file is located:   
  - Run: ```docker-compose up -d``` 
- Validate docker process are running: ```docker ps``` 
- Go to the port referenced on the yml file: [http://localhost:8080/](http://localhost:8080/)  
- To open pgadmin: [http://localhost:8080/login](http://localhost:8080/login) (password and user defined on the yml file)  
- Add new server \-\> General: enter a name \-\> Connections: add the Postgres credentials defined on the yml file (Host name/addres: postgres) \-\> save  
- Now in the left vertical menu find Databases \-\> right click over my database \-\> Click Query tool (It will open a database editor)  
- Create a database table: CREATE TABLE users () 
```
  //table with 4 columns (id, name, email, created\_at)  
  CREATE TABLE users (  
  id SERIAL PRIMARY KEY, // auto increment  
  name VARCHAR(50) NOT NULL, // maximum length of 50  
  email VARCHAR(150) UNIQUE NOT NULL,  
  created\_at TIMESTAMP NOT NULL DEFAULT NOW()  
  );
```
    
- Click in “Execute script” (play button)  
- In the vertical left menu: database name \-\> schemas \-\> public \-\> tables \-\> users \-\> columns \-\> you woul be able to see the table  
- Show the complete database: Right click over users \-\> view/edit \-\> all rows  
- Show the complete database, in the left vertical menu find Databases \-\> right click over my database \-\> Click Query tool (It will open a database editor): 
```SELECT \* FROM users;```
- To create transactions in the data base: INSERT INTO  \<users\> (properties\>)  
```
  INSERT INTO users (name, email)  
  VALUES  
  ('Vera Mora', 'vera@gmail.com'),  
  ('Gloria Tomas', 'tomas@hotmail.com');
```
    
- To update a transaction
```
  UPDATE users  
  SET name \= 'Gloria Gloria'  
  WHERE id \= 2;
```
    
- To delete transaction:
```
  DELETE FROM users  
  WHERE id \= 1;
```
    
- To stop docker service \-\> run ```docker-compose down```
