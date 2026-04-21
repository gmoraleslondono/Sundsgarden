# Week 13

## Tutorial link

- Advanced sql queries and database relationships: https://www.youtube.com/watch?v=oRrlJtlGJxo
- More SQL Query practice: https://www.youtube.com/watch?v=yYODewhGQkU
  

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
