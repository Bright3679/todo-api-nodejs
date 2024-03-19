const mongoose = require('mongoose')
let schema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    }
})
module.exports = mongoose.model('tasks', schema)