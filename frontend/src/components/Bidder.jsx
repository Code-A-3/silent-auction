import { useState } from "react";

function Bidder(props){
    // const [bidderName, setBidderName] = useState('');
    const [biddingAmount, setBiddingAmount] = useState('');

    const handleSubmit = () => {
        props.addBid(props.itemId, props.bidderId, parseFloat(biddingAmount));
        // setBidderName('');
        setBiddingAmount('');
    }

    return (
        <div className="bidder">
            <input type="text" disabled name="bidderName" id="bidderName" placeholder="Your Name..." value={props.bidderId} onChange={e => setBidderName(e.target.value)} />
            <input type="number" name="biddingAmount" id="biddingAmount" placeholder="Your Bid..." value={biddingAmount} onChange={e => setBiddingAmount(e.target.value)} />
            <button id="submitBid" name="submitBid" type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Bidder;