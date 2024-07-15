import Router from 'express';
import {loginUser, registerUser} from '../controllers/userController.js';

const userRouter = Router();

// Login
userRouter.post('/login', loginUser);

//Signup
userRouter.post('/register', registerUser);


export default userRouter;