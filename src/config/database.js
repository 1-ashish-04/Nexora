const mongoose = require("mongoose")
// it always return promise
const connectDB = async ()=>{
await mongoose.connect("mongodb+srv://FirstNode:F1rstN0de@cluster0.ss1b3v1.mongodb.net/nexora")
}

module.exports = {connectDB}

