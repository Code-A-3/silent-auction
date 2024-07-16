import Router from 'express';
import {loginUser, registerUser, logoutUser} from '../controllers/userController.js';

const userRouter = Router();

// Login
userRouter.post('/login', loginUser);

//Signup
userRouter.post('/register', registerUser);

//Logout
userRouter.post('/logout', logoutUser);

export default userRouter;