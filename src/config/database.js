const mongoose = require("mongoose")

const connectDB = async ()=>{
await mongoose.connect("mongodb+srv://FirstNode:F1rstN0de@cluster0.ss1b3v1.mongodb.net/nexora")
}

module.exports = {connectDB}

