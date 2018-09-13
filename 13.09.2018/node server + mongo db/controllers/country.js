const models = require('./../models/index');
const countryList = require('./../models/country.json');

function addCountryRoutes(app) {

    //if the db is empty -fill it with the countryList seed
    models.Country.find({}, (err, countries) => {
        if (!countries.length)
            models.Country.insertMany(countryList, (err, res) => {
                console.log("Insert countryList succsess");
            });
    });
    //Get all countries
    app.get('/countries', function (request, respones) {
        models.Country.find({}, (err, countries) => {
            respones.send(countries);
        });
    });

}



module.exports = { addCountryRoutes };