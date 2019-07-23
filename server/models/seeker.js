const mongoose = require("mongoose")

let SeekerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    org: {
        type: String
    },
    email: {
        type: String
    }
})