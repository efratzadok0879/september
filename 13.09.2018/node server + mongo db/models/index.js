const mongoose = require('mongoose');
const user = require('./user');
const country = require('./country');

//destruct the object so that we don't have to write .userModel
//const user={...require('./user')};

//Connect to mongoDB:
mongoose.connect("mongodb://localhost:27017/TravelerDB",
    (err) => {
        //if error is empty we connected successfuly
        console.log(err || "We're connected to mongoDB");
    });


//Create MongoDB Model:
module.exports = {
    User: mongoose.model("User", user.userModel),
    Country: mongoose.model("Country", country.countryModel)
};


