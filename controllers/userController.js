const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asynHandler=require('express-async-handler')
const User =require('../models/Vendor')


//@disc register user
//route POST/api/users
//@access Public
const registerUser= asynHandler(async (req,res)=>{
    const {name,email,password}=req.body

    if(!name||!email||!password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exist
    const userExist=await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }

    //Hash the password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)

    //Create User
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json(
        {_id:user.id,
        name:user.name,
        email:user.email,
    })
    }else{
        res.status(400)
            throw new Error('Invalid user data')
        
    }

    
})

//@disc Authenticate user
//route POST/api/users/login
//@access Public
const loginUser=asynHandler(async (req,res)=>{
    res.json({message:'login User'})
})

//@disc Get user data
//route Get/api/users/me
//@access Public
const getMe=asynHandler(async (req,res)=>{
    res.json({message:' User Data display'})
})





module.exports={
    registerUser,
    loginUser,
    getMe
}