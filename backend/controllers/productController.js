const Product=require('../models/productModels');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError=require('../middleware/catchAsyncError')
const ApiFeatures=require("../utils/apiFeatures")


//create a new product --Admin
exports.createProduct=catchAsyncError(async (req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(200).json({
        status:true,
        product
    })
})


//get all Products
exports.getAllproducts=catchAsyncError(async (req,res)=>{
    const apiFeature=new ApiFeatures(Product.find(),req.query).search();
    const products=await apiFeature.query;
    res.status(200).json({
        success:true,
        products
    });
})

//get Single Product
exports.getSingleProduct=catchAsyncError(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found",404));
    }
    res.status(200).json({
        success:true,
        product
    })
})

//Update Product --Admin
exports.updateProducts=catchAsyncError(async(req,res,next)=>{
   let product= await Product.findById(req.params.id);
   if(!product){
    return next(new ErrorHandler("Product Not Found",404));
}

   product= await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
});

res.status(200).json({
    success:true,
    product
})
})


//Delete Product

exports.deleteProduct=catchAsyncError(async(req,res,next)=>{
   const product= await Product.findById(req.params.id);

   if(!product){
    return next(new ErrorHandler("Product Not Found",404));
}

   await Product.findOneAndDelete();

   res.status(200).json({
    success:"true",
    message:"Product Deleted Succesfully"
   })
})