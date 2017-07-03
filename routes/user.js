const express = require('express');
const auth_lib = require('../lib/auth');

var route = express.Router();

// Route to create new user
route.post("/",(req,res)=>{
    new auth_lib(req.body)
        .signup()
        .then((user)=>{
            res.status(201).end();
        })
        .catch((err)=>{
            res.status(400).json({"err": err.message});
        });
});


// Route to generate new auth token
route.post("/token",(req,res)=>{
    new auth_lib(req.body)
        .token()
        .then((token)=>{
            res.status(200).json(token);
        })
        .catch((err)=>{
            res.status(400).json({"err": err.message});
        });
});


module.exports = route;
