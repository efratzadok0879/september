const models = require('../models/index');

function addUserRoutes(app) {
    //Get all countries
    app.get('/users', function (request, respones) {
        models.User.find({},(err,users)=>{
            respones.send(users);
        });
    });
}


module.exports = { addUserRoutes };