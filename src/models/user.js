const mongoose = require("mongoose")

const userSchema = mongoose.Schema({ // Schema Defining
    firstName : {
        type : String
    },
    lastName :{
        type : String
    },
    emailId : {
        type : String
    },
    age : {
        type : Number
    },
    password : {
        type : String
    },
    gender : {
        type : String
    },
    bio : {
        type : String
    }
})

const User = mongoose.model("User", userSchema)  // mongoose.Mdel("Model_Name", Schema_Name)
module.exports = User