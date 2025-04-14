# Using Swagger with HTTP methods

**Swagger** is a program that help us to write documentation of our API. Also, it can be used to test the API on the browser.

1. Install Swagger \-\> ```npm install swagger-jsdoc swagger-ui-express``` 
2. Import swagger on server file \-\> 
  ```
  import swaggerJSDoc from “swagger-jsdoc”  
  import swaggerUi from “swagger-ui-express” 
  ``` 
3. Create swagger options:
``` 
  const swaggerOptions \= {  
    	definition: {

    openapi: “3.0.0”,  
    Info: {

    title: “Books API”,  
    version: “1.0.0”,  
    description: “A simple Express Books API,

    },

    },  
    apis: \[“./server.js”\],  
    };
```
4. Generate documentation automatically adding to the server file \-\> 
``` 
  const swaggerDocs \= swaggerJSDoc(swaggerOptions)  
  app.use(“/api-docs”, swaggerUi.serve, swaggerUi.setup(swaggerDocs)) 
```
5. Test on your browser \-\> [http://localhost:3000/api-docs](http://localhost:3000/api-docs) you should see some content there  
6. Start adding documentation on the server file \-\> use /\*\* \*/ to wrap the documentation test. Here the example of a GET method documentation:
```
  /**

  *@swagger

  */books:

  * 	get:

  *	summary: Retrieves a list of all the books

  *	…

  */
  ```


NOTE: the indentation is important for the swagger engine, be sure to indent correctly.  
For more information, read here: [https://swagger.io/docs/specification/v3\_0/basic-structure/](https://swagger.io/docs/specification/v3_0/basic-structure/)