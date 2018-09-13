const models = require('../models/index');

function addCountryRoutes(app) {
    //Get all countries
    app.get('/countries', function (request, respones) {
        models.Country.find({},(err,countries)=>{
            respones.send(countries);
        });
    });
}


module.exports = { addCountryRoutes };