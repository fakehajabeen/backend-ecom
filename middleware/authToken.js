const jwt = require('jsonwebtoken');
async function authToken(req,res,next) {
    try {
        const token=req.cookies?.token 
        if (!token){
            return res.status(200).json({
                
                    message: "User not Login",
                    error: true,
                    success: false,
                
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log(err)
            console.log("decoded", decoded) // bar
            req.userId= decoded?._id
            next();
          });
        console.log('token',token)
        
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            data:[],
            error: true,
            success: false,
        });
        
    }
    
}
module.exports= authToken;