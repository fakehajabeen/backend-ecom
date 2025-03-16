async function userLogout(req, res) 
{
    try {
        res.clearCookie("token")
     

        res.json({
            message:"logout Successfully",
            success: true,
            error: false,
            data:[],

        })
        
    } catch (err) {
        res.json({
            message: err.message || err ,
            error : true,
            success: false,
        })
        
    }
    
}
module.exports = userLogout;