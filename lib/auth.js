const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user_model = require('../models/user');

var app_rounds = process.env.app_rounds;
app_rounds = parseInt(app_rounds,10);
var app_secret = process.env.app_secret;

// User class
var user = function (body) {
    this.body = body;
    this.body.added_on = new Date();
}

user.prototype.validate_form = function () {
    return new Promise((fullfill,reject)=>{
        if(this.body.username !== undefined && this.body.password !== undefined)
            fullfill()
        else
            reject(new Error("Please fill complete form"));
    });
}

user.prototype.hash_password = function () {
    return new Promise((fullfill,reject)=>{
        bcrypt.hash(this.body.password,app_rounds,(err,hash)=>{
            if(err)
                reject(err);
            else{
                this.body.password = hash;
                fullfill();
            }
        });
    });
}

user.prototype.store_user = function () {
    return new Promise((fullfill,reject)=>{
        new user_model(this.body)
            .save()
            .then(fullfill)
            .catch(reject);
    });
}

user.prototype.get_user = function () {
    return new Promise((fullfill,reject)=>{
        user_model
            .findOne({username: this.body.username})
            .then(fullfill)
            .catch(reject);
    });
}

user.prototype.validate_password = function (user) {
    return new Promise((fullfill,reject)=>{
        bcrypt.compare(this.body.password,user.password,(err,res)=>{
            if(err || res === false)
                reject(new Error("Invalid credentials"));
            else
                fullfill(user);
        });
    });
}

user.prototype.generate_token = function () {
    return new Promise((fullfill,reject)=>{
        /* Code */
    });
}


user.prototype.signup = function () {
    return new Promise((fullfill,reject)=>{
        this.validate_form()
            .then(this.hash_password.bind(this))
            .then(this.store_user.bind(this))
            .then(fullfill)
            .catch(reject);
    });
}

user.prototype.token = function () {
    return new Promise((fullfill,reject)=>{
        this.validate_form()
            .then(this.get_user.bind(this))
            .then(this.validate_password.bind(this))
            .then(this.generate_token.bind(this))
            .then(fullfill)
            .catch(reject);
    });
}

module.exports = user;
