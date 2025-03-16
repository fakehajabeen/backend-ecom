const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function userSigninController(req, res) {
    try {
        const { email, password } = req.body;


        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        // Hash the password using bcrypt
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password, salt);

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }
        const checkPassword = await bcrypt.compare(password, user.password)
      //  console.log("checkpassword", checkPassword)

        if(checkPassword){
            const tokenData={
                _id:user._id,
                email: user.email,

            }
            const tokenOption={
                httpOnly:true,
                secure: true
            }
            const token= await jwt.sign(
                tokenData, process.env.TOKEN_SECRET_KEY
              , { expiresIn: 60 * 60 * 8});
              
              res.cookie("token",token,tokenOption).json({
                message:"login Successfully",
                data:token,
                success: true,
                error: false
              })

        }else{
            throw new Error("Please Check Password")
        }




    } catch (err) {
        // Send error response
        res.status(500).json({
            message: err.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSigninController;


