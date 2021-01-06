'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var fileSchema = new Schema({
    fileName: {
        type: String,
        required: 'choose file'
    }
    
});

module.exports = mongoose.model('file', fileSchema);