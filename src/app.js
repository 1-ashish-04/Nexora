const express = require("express");

const app = express();

app.use("/user", (req,res)=>{
    try{
    throw new Error("Error Happend")
    res.send("Helllloooo User...")}
    catch{
        res.status(500).send("Some went wrong.")
    }
})

/*
app.use("/", (err, req, res, next)=>{
    if(err){
        res.status(500).send("Something went wrong")
    }
})
    */

const portNum = 7777;
app.listen(portNum, () => {
  console.log("Server is listening on port number", portNum);
});
