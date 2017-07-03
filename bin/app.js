require('dotenv').config();
const express = require('express');
const loader = require('require-dir');
const mongoose = require('mongoose');
const morgan = require('morgan');
const chalk = require('chalk');

mongoose.connect('mongodb://'+process.env.db_host+'/'+process.env.db_name);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Database err:'));

var app = express();

app.use(morgan('combined'));

var routes = loader('../routes');
Object.keys(routes).forEach((route)=>{
    app.use("/"+route,routes[route]);
    console.log(chalk.yellow("Loading route : "+route));
});

var api_port = process.env.api_port;
api_port = parseInt(api_port,10);
app.listen(api_port,()=>{
    console.log(chalk.green.bold("Http server running on port : "+api_port));
});
module.export = app;
