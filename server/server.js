import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import data from './data.js';
import authUser from './auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(setUser);

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((error) => console.log(error));

function setUser(req, res, next){
    const userId = req.query.userId;
    const pass = req.query.passs;
    if (userId) {
        req.user = data.users.find(user => user.userName === userId);
        if (req.user && pass != data.users.find(user => user.userName === userId).password){
            req.user = null;
        }
    };
    next();
}

// DEFINE API ROUTES
app.get('/api/items', authUser, (req, res) => {
    res.json({items: data.items});
});

app.get('*', (req, res) => {
    res.status(400).json({message: 'BAD Request!'});
});

app.put('/api/items/:id/bids', (req, res) => {
    const itemId = parseInt(req.params.id);
    const { bidder, amount } = req.body;
  
    let item = data.items.find(i => i.id === itemId);
    if (!item) {
      return res.status(404).send('Item not found');
    }
  
    item.bids.unshift({ bidder, amount });
    res.json({items: data.items});
  });

// run sever
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});