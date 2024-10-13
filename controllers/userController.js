const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


//@disc register user
//route POST/api/users
//@access Public
const registerUser=(req,res)=>{
    res.json({message:'Register User'})
}

//@disc Authenticate user
//route POST/api/users/login
//@access Public
const loginUser=(req,res)=>{
    res.json({message:'login User'})
}

//@disc Get user data
//route Get/api/users/me
//@access Public
const getMe=(req,res)=>{
    res.json({message:' User Data display'})
}





module.exports={
    registerUser,
    loginUser,
    getMe
}