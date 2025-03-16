const userModel= require("../../models/userModel")
async function userDetailsController(req,res) {
    try {
        //console.log("userId", req.userId) 
        const user= await userModel.findById(req.userId)
 
        res.status(200).json({
            data:user,
            message: "User Details",
            error: false,
            success: true,
        })
         

        
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
    
}
module.exports= userDetailsController;