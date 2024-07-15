import UserModel from '../models/userModel.js';

// Login User
const loginUser = async (req,res) => {
    res.json({message: 'login message'});
}


// Register user
const registerUser = async (req,res) => {
    const {userName, password} = req.body;
    try {
        const user = await UserModel.register(userName, password);
        res.status(200).json({userName});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export {loginUser, registerUser};