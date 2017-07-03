const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "user"},

    added_on: {type: Date}
});

module.exports = mongoose.model('user',userSchema);
