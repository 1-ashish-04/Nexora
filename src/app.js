const express = require("express")

const app = express()


// app.use("/route", routeHandler1, [routeHandler2, routeHandler3, routeHandler4], routeHandler5)

const val = [(req,res, next)=>{
    console.log("routeHandler 2 currently going on.")
    // res.send("Handler 2 ...!")
    next()
},
(req,res)=>{
    console.log("routeHandler 3 currently going on.")
    res.send("Handler 3 ...!")
    
}]

app.use("/user", (req,res, next)=>{
    console.log("routeHandler 1 currently going on.")
    // res.send("Handler 1 ...!")
    next()
}, val
)

const portNum = 7777
app.listen(portNum , ()=> {
    console.log("Server is listening on port number", portNum)
})