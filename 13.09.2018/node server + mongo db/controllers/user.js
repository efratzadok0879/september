const models = require('../models/index');
const jwt = require('jsonwebtoken');
const User = require('./../models/index').User;
const authenticate=require('./authenticate');
function addUserRoutes(app) {

    app.get('/users', function (request, respones) {
        models.User.find({}, (err, users) => {
            respones.send(users);
        });
    });

    app.post('/register',authenticate, function (request, respones) {
        let user = new User(request.body);
        console.log(user);
        user.save((err, res) => {
            console.log(err || "Insert user succsess");
            if (!err) {
                //create token
                let data={
                    name:user.name,
                    password:user.password
                }
                let token = jwt.sign(data, 'my secret');
                console.log(token);
                respones.send({token});
            }
        });

    })

    app.post('/login', function (request, respones) {
        let username = request.body.username;
        let password = request.body.password;
        models.User.findOne({ name: username, password: password }, (err) => {
            if (!err) {
                //create token
                let token = jwt.sign(request.body, 'my secret');
                console.log(token);
                respones.send({token});
            }

        });

    });
}

module.exports = { addUserRoutes };