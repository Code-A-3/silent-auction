import { useState } from "react";

function Bidder(props){
    const [bidderName, setBidderName] = useState('');
    const [biddingAmount, setBiddingAmount] = useState('');

    const handleSubmit = () => {
        props.addBid(props.itemId, bidderName, parseFloat(biddingAmount));
        setBidderName('');
        setBiddingAmount('');
    }

    return (
        <div className="bidder">
            <input type="text" name="bidderName" id="bidderName" placeholder="Your Name..." value={bidderName} onChange={e => setBidderName(e.target.value)} />
            <input type="number" name="biddingAmount" id="biddingAmount" placeholder="Your Bid..." value={biddingAmount} onChange={e => setBiddingAmount(e.target.value)} />
            <button id="submitBid" name="submitBid" type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Bidder;