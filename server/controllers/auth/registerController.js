const bcrypt = require('bcrypt');
const User = require("../../models/User")

const saltRounds = 10;

const registerController = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"});
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({name,email,password:hashedPassword});
        await newUser.save();

        res.status(200).json({message:"User registered successfully"});

    } catch (error) {
        console.log(error);
    }
}

module.exports = registerController;