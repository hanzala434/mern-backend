const mongoose=require('mongoose')
const vendorSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    name:{
    type:String,
    required:[true,'Please add name']
}

},
    {timestamps:true,}
)

module.exports =mongoose.model('Vendor',vendorSchema);