const express = require('express');
const api = require('../lib/api');
const api_model = require('../models/api');
var api_ctx = new api();

var route = express.Router();

route.get("/",(req,res)=>{
    api_model
        .find()
        .then((api_list)=>{
            res.json(api_list);
        })
        .catch((err)=>{
            res.status(400).json({"err":err.message});
        });
});

route.get("/:id",(req,res)=>{
    api_model
        .findById(req.params.id)
        .then((api_ctx)=>{
            res.json(api_ctx);
        })
        .catch((err)=>{
            res.status(400).json({"err":err.message});
        });
});

route.put("/:id",(req,res)=>{
    api_model
        .findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        .then((api_ctx)=>{
            res.json(api_ctx);
        })
        .catch((err)=>{
            res.status(400).json({"err":err.message});
        });
});

route.post("/",(req,res)=>{
    new api_model(req.body)
        .save()
        .then((api_ctx)=>{
            res.json(api_ctx);
        })
        .catch((err)=>{
            res.status(400).json({"err":err.message});
        });
});

route.delete("/:id",(req,res)=>{
    api_model
        .findById(req.params.id)
        .remove()
        .then(()=>{
            res.status(200).end();
        })
        .catch((err)=>{
            res.status(400).json({"err":err.message});
        });
});

module.exports = route;
