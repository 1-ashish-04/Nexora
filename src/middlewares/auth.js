const adminAuth = (req,res, next)=>{
    const tokens = "xyz"
    const isAdminAZuthorized = tokens === 'xyz';
    if(isAdminAZuthorized){
        next()
    }
    else{
        res.status(401).send("you are not authorized person")
    }
}


const userAuth = (req,res,next) => {
    const tokens = "xyz"
    const isUserAuthorized = tokens === "xyz"
    if (isUserAuthorized){
        next()
    }
    else{
        res.status(401).send("User is not authorized.")
    }
}

module.exports = {adminAuth, userAuth}