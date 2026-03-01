const express = require("express");
const { connectDB } = require("./config/database")
const User = require("./models/user")
const app = express();


app.post("/signup", async (req, res) => {

    // create a new instance of the user model
    const userData = new User({  // static data  // these indicate one document of collection User
        firstName: "Ashish",
        lastName: "Jayaswal",
        emailId: "ashish@22.com",
        password: "Ashish@22"
    })

    try {
        await userData.save()  // data saved into database nexora, collection User

        res.send("User data saved Successfully.")
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

connectDB().then(() => { //  Promise handling 
    console.log("Successfully connected to the database ---> nexora")

    const portNum = 7777;

    app.listen(portNum, () => {
        console.log("Server is listening on port number", portNum);
    });
})

    .catch(() => {
        console.log("Not connected to the cluster")
    })


