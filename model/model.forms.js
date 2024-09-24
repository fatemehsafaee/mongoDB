
const { Schema, model } = require('mongoose');


const formModel = new Schema({
    name: {
        type: String,
        require: true
    },
    family: String,
    age: Number,
    job: String
})


const form = model('form', formModel)


module.exports = form