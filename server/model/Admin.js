const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
    },
});
// Create a static method to find an admin by email
schema.statics.findByEmail = function(email, callback) {
    return this.findOne({ email }, callback);
};
const Admindb = mongoose.model('admindb', schema);

module.exports = Admindb;