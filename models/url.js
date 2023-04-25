// db schema
const mongoose = require("mongoose")

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        unique: true
    },
    redirectUrl: {
        type: String ,
        unique: true
    },
    visitedHistory: [{
        timestamp: {
            type: Number
        }
    }]
}, {timestamps: true})
 
const URL = mongoose.model("url" , urlSchema)

module.exports = URL