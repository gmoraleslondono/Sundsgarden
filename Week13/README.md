# Advanced sql queries and database relationships

- Foreign key (shared property in tables):  
```
  CREATE TABLE profiles (  
  id SERIAL PRIMARY KEY,  
  user\_id INT UNIQUE,  
  FOREIGN KEY (user\_id) REFERENCES users(id),  
  bio TEXT  
  );
```
