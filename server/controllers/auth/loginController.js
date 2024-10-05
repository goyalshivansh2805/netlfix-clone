const bcrypt = require('bcrypt');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const loginController = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"User not found"});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(401).json({message:"Invalid credentials"});
        const accessToken = jwt.sign({email:user.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"30m"});
        const refreshToken = jwt.sign({email:user.email},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"});
        await user.save();
        await res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'none',maxAge:7*24 * 60 * 60 * 1000});
        
        res.json({accessToken});

    } catch (error) {
        console.log(error);
    }
}

module.exports = loginController;