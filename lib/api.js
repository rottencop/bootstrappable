const mongoose = require('mongoose');
const api_model = require('../models/api');
const chalk = require('chalk');

var api = function() {
    var that = this;
    api_model
        .find()
        .then((api_list)=>{
            console.log(chalk.green("Loading api list"));
            that.api_list = api_list;
        })
        .catch((err)=>{
            console.log(chalk.red.bold(err.message));
        });
};



module.exports = api;
