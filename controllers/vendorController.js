const asyncHandler=require('express-async-handler')
//@disc get vendors
//route GET/api/vendors
//@access private
const getVendors=asyncHandler(async (req,res)=>{
    res.status(200).json({message:'Get Vendors'})
})

//@disc create vendors
//route POST/api/vendors
//@access private
const createVendor=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text');
    }
    res.status(200).json({message:'Create Vendors'})
}
)
//@disc update vendors
//route PUT/api/vendors
//@access private
const updateVendor= asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update Vendors ${req.params.id}`})
})

//@disc Delete vendors
//route DELETE/api/vendors
//@access private
const deleteVendor=asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete Vendors ${req.params.id}`})

})


module.exports={
    getVendors,createVendor,updateVendor,deleteVendor

}