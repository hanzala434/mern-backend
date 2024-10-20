
const asyncHandler=require('express-async-handler')
const Budget = require('../models/Budget')
const User = require('../models/User')

//get Budget
//GET method
//Private
const getBudget=asyncHandler(async (req,res)=>{
   
    const budget=await Budget.find({user:req.user.id})
    res.status(200).json(budget)
})

//Create Budget
//POST method
//Private
const createBudget=asyncHandler(async(req,res)=>{
    
   
    if(!req.body.decor || !req.body.photography || !req.body.venue||!req.body.others){
        res.status(400)
        throw new Error('Please add all text fields');
    }

    const budget=await Budget.create({
        decor:req.body.decor,
        photography:req.body.photography,
        venue:req.body.venue,
        others:req.body.others,
        user:req.user.id,
    })


    res.status(200).json(budget)

})

//@disc Update budget
//route DELETE/api/setup-budget/:id
//@access private

const updateBudget=asyncHandler(async(req,res)=>{
    const budget=await Budget.findById(req.params.id)
    if(!budget){
        res.status(400)
        throw new Error('Budget not found')
    }


    if(!req.user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged-in user matches the budget user
    if(budget.user.toString()!==req.user.id)
    {
        res.status(401)
        throw new Error('User not Autherized')
    }
    const updatedVendor=await Vendor.findByIdAndUpdate(req.params.id,req.body,
        {
            new:true,

        })


    res.status(200).json(updatedVendor)
})

//@disc Delete budget
//route DELETE/api/setup-budget/
//@access private
const deleteBudget=asyncHandler(async (req,res)=>{
    const budget=await Budget.findById(req.params.id);
    if(!budget){
        res.status(400)
        throw new Error('Vendor with id not found')
    }
   
    if(!req.user)
    {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged-in user matches the budget user
    if(budget.user.toString()!==req.user.id)
    {
        res.status(401)
        throw new Error('User not Autherized')
    }
    await Budget.findByIdAndDelete(req.params.id); // Delete the budget
    res.status(200).json({id:req.params.id})

})

module.exports={
    createBudget,
    getBudget,
    updateBudget,
    deleteBudget
}