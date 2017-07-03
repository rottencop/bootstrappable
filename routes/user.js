const express = require('express');
const auth_lib = require('../lib/auth');
const user_model = require('../models/user');

var route = express.Router();

// Dev route to list all users
route.get("/",(req,res)=>{
    user_model
        .find()
        .then((user_list)=>{
            res.json(user_list);
        })
        .catch((err)=>{
            res.status(400).json({"err": err.message});
        });
});

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
