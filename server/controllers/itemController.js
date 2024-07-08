import ItemModel from '../models/itemModel.js';

// Get all items
const getItems = async (req,res)=>{
    try {
        const items = await ItemModel.find({}).sort({title: 1});
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({error: `Error fetching items: ${error.message}`});
    }
}

// Get a single item
const getItem = async (req,res)=>{
    const {id} = req.params;
    try {
        const item = await ItemModel.findById(id);
        if (!item){
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(200).json(item);
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(400).json({error: `Error fetching item: ${error.message}`});
    }
}

// Create new item
const createItem = async (req,res)=>{
    const {title, description, minBid, image} = req.body;
    try {
        await ItemModel.create({title, description, minBid, image});
        res.status(200).json({message: 'New item created.'});
    } catch (error) {
        res.status(400).json({error: `Error during creating new item: ${error.message}`});
    };
};

// Add new bid to an item
const addBid = async (req,res)=>{
    const {id} = req.params;
    const {user, amount} = req.body;
    if (!id || !user || !amount || isNaN(amount)) {
        return res.status(400).json({error: 'Some needed data is not provided or not proper'});
    }
    try {
        const item = await ItemModel.findById(id);
        if (!item){
            return res.status(404).json({error: 'Item not found'});
        }
        if (item.bidHistory.length > 0 && amount <= item.bidHistory[0].amount){
            return res.status(400).json({error: `You should bid higher than the last bid: ${item.bidHistory[0].amount}`});
        }
        if (amount < item.minBid){
            return res.status(400).json({error: `You should bid at least the minimum bid: ${item.minBid}`});
        }
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(400).json({error: `Error fetching item: ${error.message}`});
    }
    const bid = {amount: amount, bidder: user}
    try {
        await ItemModel.findByIdAndUpdate(
            id, 
            {$push: {bidHistory: {$each:[bid], $position: 0}}}
        )
        res.status(200).json({message: 'Bid added.'});
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(400).json({error: `Error deleting item: ${error.message}`});
    }
}

// Delete item
const deleteItem = async (req,res)=>{
    const {id} = req.params;
    try {
        const item = await ItemModel.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(200).json({message: `${item.title} is deleted.`});
    } catch (error) {
        if (error.name == 'CastError') {
            return res.status(404).json({error: 'Item not found'});
        }
        res.status(400).json({error: `Error deleting item: ${error.message}`});
    }
}

export {createItem, getItems, getItem, deleteItem, addBid};