const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var apiSchema = new Schema({
    namespace: {type: String, required: true},
    model: {type: Object},
    version: {type: Number},
    is_enabled: {type: Boolean, default: false},
});

module.exports = mongoose.model('api',apiSchema);
