const express = require("express");

const app = express();

const {adminAuth, userAuth}  = require("./middlewares/auth")

app.use("/admin", adminAuth)

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data loaded successfully.")
})

app.get("/admin/deleteUser", (req,res)=>{  
    res.send("Specific data deleted successfully.")  
})

app.use("/user/login", (req,res)=>{
    res.send("User loggin successfully.")
})

app.use("/user", userAuth)

app.get("/user/data", (req,res)=>{
    res.send("User get its data successfully.")
})

app.get("/user/delete", (req,res)=>{
    res.send("User data deleted.")
})

const portNum = 7777;
app.listen(portNum, () => {
  console.log("Server is listening on port number", portNum);
});
