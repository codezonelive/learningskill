const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
    name: String,
    phone:  String,
    created_at: {type: Date, default: Date.now()}
},{
    versionKey:false
})

const test = mongoose.model('Tests', testSchema)

module.exports = test