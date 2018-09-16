//Requires:
const express=require('express');
const bodyParser=require('body-parser');
const user=require('./user');
const country=require('./country');
//Create express app:
var app=express();

//use cores to enable serving the client
const cors = require('cors');
var corsOptions = {
    origin: '*',
    // some legacy browsers (IE11, various SmartTVs) choke on 204 
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//Use middlewares to get request's body as json:
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Add controller route
user.addUserRoutes(app);
country.addCountryRoutes(app);

//Run server:
app.listen(process.env.PORT || 3000,()=>{
    console.log("listening");
});