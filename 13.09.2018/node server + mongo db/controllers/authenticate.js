const jwt = require('jsonwebtoken');
const User = require('./../models/index').User;

let authenticate = (req, res, next) => {
    let user = new User(request.body);
    if (user.password.length == 64) {
        req = req;
        next();
    }
    else
        res.status(400).send();
}
module.exports(authenticate);