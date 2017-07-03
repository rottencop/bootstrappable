const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Just an index of all available routes
var roleSchema = new Schema({
    name: {type: String, required: true},
    added_on: {type: Date}
});

module.exports = mongoose.model('role',roleSchema);
