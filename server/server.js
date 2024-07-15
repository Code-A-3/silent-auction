// GET REQUIREMENTS
import express from 'express';
import dotenv from 'dotenv';
import itemsRouter from './routes/itemsRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';
import cors from 'cors';


// INITIATE .env USAGE
dotenv.config();


// INITIATE EXPRESS APP
const app = express();


// CONNECT TO MONGO DB
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@silentauction.qwx3zds.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=SilentAuction`)
 .then(() => {
    console.log('DB connected.');
 })
 .catch((err) => {
    console.error(`Cannot connect DB: ${err.message}`);
 });



// MIDDLEWARES

// To read the request body
app.use(express.json());

// To fix CORS issue
app.use(cors());

// A basic logger
app.use((req, res, next)=>{
    console.log(`New Request: Path= "${req.path}", Method= ${req.method}`);
    next();
});


// ROUTES
app.use('/items', itemsRouter);
app.use('/user', userRouter);
app.get('/', (req, res)=>{
    res.redirect('/items');
});


// RUN EXPRESS SERVER
app.listen(process.env.PORT || 4000, () => {
    console.log(`API server is active on port: ${process.env.PORT || 4000}`);
});

