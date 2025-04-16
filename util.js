require("dotenv").config();
const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const multer = require("multer")


const responseGenerator = (success, message , data) => {
    let obj = {}
    obj.success=success;
    obj.message=message || (success ? "Success" : "Failed");
    if(data){
        obj.data = data
    }
    return obj
}

const hashPassword = (plainPassword) => {
    return bcrypt.hash(plainPassword,2)
}
const comparePassword = (plainPassword,hashPassword) =>{
    return bcrypt.compare(plainPassword,hashPassword)
}


const generateTokens = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"1d"})
}



const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
        jwt.verify(token, 'secretKey', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+"_"+file.originalname;
        req.body.filename=name
        cb(null,name)
    }
})

const upload=multer({storage})


module.exports = {
    responseGenerator,
    hashPassword,
    comparePassword,
    generateTokens,
    storage,
    upload,
    authenticateJWT
}