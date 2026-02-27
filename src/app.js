const express = require("express")

const app = express()

// only handle GET call
app.get("/user", (req,res)=> {
    res.send({firstName: "Ashish", lastName : "Jayaswal"})
})

// only handle POST call
app.post("/user", (req,res)=>{
    res.send("User Data Successfully saved into db")
})

// only handle DELETE call
app.delete("/user",(req,res)=>{
    res.send("User data deleted successfully from the db")
})

// only handle PUT call
app.put('/user',(req,res)=>{
    res.send("User Data updated through put")
})

// only handle PATCH call
app.patch('/user',(req,res)=>{
    res.send("User detail updated through patch")
})

// can handle anytype of the call (GET, POST, PATCH, PUT, DELETE)
app.use('/', (req,res) => {
    res.send("Home Page, can handle anyone")
})
const portNum = 7777
app.listen(portNum , ()=> {
    console.log("Server is listening on port number", portNum)
})