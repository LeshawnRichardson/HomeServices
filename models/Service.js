const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity:  Number,
    workarea: Boolean
   
});

const Service = mongoose.model('Service', serviceSchema);

// Tell javascript which  variable we want to be the result of the require()statement in server.js
module.exports = Service;