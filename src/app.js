const express = require("express")

const app = express()


app.get(/.*fly$/, (req,res) => {
    res.send("HTTP Routing with regex")
})

// query params
app.get("/user", (req, res)=>{
    console.log(req.query)
    res.send(req.query)
})


// req params
app.get("/user/:id", (req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.get("/user/:id/:name/:password", (req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

const portNum = 7777
app.listen(portNum , ()=> {
    console.log("Server is listening on port number", portNum)
})