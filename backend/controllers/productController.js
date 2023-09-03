const Product=require('../models/productModels')

//create a new product --Admin
exports.createProduct=async (req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(200).json({
        status:true,
        product
    })

}



//get all Products
exports.getAllproducts=async (req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    });
}

//Update Product --Admin
exports.updateProducts=async(req,res,next)=>{
   let product= await Product.findById(req.params.id);

   if(!product){
    return res.status(500).json({
        success:false,
        message:"Product Not Found"
    })
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
}


//Delete Product

exports.deleteProduct=async(req,res,next)=>{
   const product= await Product.findById(req.params.id);

   if(!product){
    return res.status(500).json({
        success:false,
        message:"Product Not Found"
    })
   }

   await Product.findOneAndDelete();

   res.status(200).json({
    success:"true",
    message:"Product Deleted Succesfully"
   })
}