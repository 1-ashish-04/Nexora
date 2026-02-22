const express = require("express")

const app = express()

app.use("/test",(req, res)=> {
   res.send("Server is started, Nexora (Next Developer) is on the way...!")
})

app.use("/hello",(req, res)=> {
   res.send("Hello Nexorians, ...! Enjo the NEXORA.")
})

app.use("/", (req,res)=>{
    res.send("Home page ........ find your match")
})

const portNum = 7777
app.listen(portNum , ()=> {
    console.log("Server is listening on port number", portNum)
})