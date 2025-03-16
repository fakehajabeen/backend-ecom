const addToCartModel = require("../../models/cartModel")

const updateAddToCartProduct= async(req, res)=>{
    try {
        const currentUserId= req.userId
        const addToCartProductId= req.body._id
  const qty= req.body.quantity
        const updateProduct= await addToCartModel.updateOne({_id : addToCartProductId},{
          ...(qty &&  {quantity: qty})
        })

        res.json({
            data:updateProduct,
            message: "Product updated",
            error: false,
            success: true,
        })
    
    } catch (error) {
        res.json({
            message:error.message || error,
            error : true,
            success : false,
        })  
    }

}

module.exports= updateAddToCartProduct;