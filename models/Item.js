const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating our Schema
// This defines the blueprint for the data we'll work with in our DB
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Lets us export our schema as a mongoose model object that has a name and a schema object.
module.exports = Item = mongoose.model('item', ItemSchema);