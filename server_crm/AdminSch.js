const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    admin_id:{
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }, 
    type: {
        type: String,
        default: "admin",
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("Admin",AdminSchema);