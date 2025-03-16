const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');

async function userSignupController(req, res) {
    try {
        const { email, password, name } = req.body;
        
        const us=await userModel.findOne({email})
        if (us){
            throw new Error("Already user exist")
        }
        console.log('req.body', req.body);

        // Validate request body
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const payload={
            ...req.body,
           role: "GENERAL",
            password: hashPassword
        }

        // Create a new user instance
        const user = new userModel(payload)
        // Save user to the database
        const result = await user.save();
        //console.log('User saved:', result);

        // Send success response
        res.status(201).json({
            data: result,
            success: true,
            error: false,
            message: "User created Successfully!",
        });

    } catch (err) {
        // Send error response
        res.status(500).json({
            message: err.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignupController;
