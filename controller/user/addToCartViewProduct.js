const addToCartModel  = require("../../models/cartModel")

const addToCartViewProduct  = async(req, res)=>{
 try {

    const currentUser= req?.userId

    const  allProduct= await addToCartModel.find({
        userId : currentUser
        }).populate("productId")


    res.json({
        data : allProduct,
        message : "ok",
        success : true,
        error : false
        
    })
    
 } catch (error) {
    res.status(400).json({
        message : error.message || err,
        error : true,
        success : false
    
 })



}
}
module.exports= addToCartViewProduct