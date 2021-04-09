// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Setup Server

app.listen(port, listening);

function listening(){
    console.log('Server Running .........');
    console.log(`Server running on port number ${port} `);
}

app.post('/addData', (req, res)=> {

    projectData.temp=req.body.temp;
   
    projectData.date=req.body.date;
   
    projectData.userResponse=req.body.feelings;
   
    res.send();
})

app.get('/all',(req, res) =>{
   
    res.send(projectData);
    
})