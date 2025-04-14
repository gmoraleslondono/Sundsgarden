#  Install and Config Express.js

1. Create a folder called server. 

2. In the server folder, run: 
```
npm init -y   
npm install express 
npm install cors   
npm install nodemon -D
```

3. Go to package.json and change the main to the name of the file you will add. Example—> “main”: “script.js” 

NOTE: To create a file you can use the terminal: touch <nameFile.extentionfile>

4. Add commands to the package.json on the scripts section:
```
“start”: “node script”
“dev”: “nodemon script”
```

5. Import express into the server file, write at the top of the file:
```
const express = require(“express”)
And import also an app instance and core: 
const app = express()
const cors = require("cors");
```

6. Allow cross-origin requests from client -> localhost:5173 and server -> localhost:8080
```
const corsOptions = {
  origin: ["http://localhost:5173"], //where the app is running
};
app.use(cors(corsOptions));
```

7. Create the route for the backend api
```
app.get("/api", (req, res) => {
  res.json({the response goes here})
})
```

8. Create the listener
```
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
```

#  Install and Config axios

1. In the client folder:
```npm install axios```

2. On the app.tsx import axios:
```import axios from "axios";```

3. On the app.tsx now we can fetch data:
```
const [superheroes, setSuperheroes] = useState([]);

const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data)
    setSuperheroes(response.data.superheroes);
};

  // response to changes on the system reactively
useEffect(() => {
fetchApi();
}, []);
```
