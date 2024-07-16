
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Item(props) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = () => {
        props.onDelete(props.item._id, props.item.title);
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.item.image} alt={props.item.title} />
            </div>
            <div className="card-content">
                <h2>{props.item.title}</h2>
                <p><strong>Description:</strong> {props.item.description}</p>
                {props.item.bidHistory[0] ? (
                    <p><strong>Current Bid:</strong> {props.item.bidHistory[0].amount}</p>
                ) : (
                    <p><strong>Minimum Bid:</strong> {props.item.minBid}</p>
                )}
            </div>
            <div className="card-actions">
                {!props.auth ? 
                    <NavLink to="/login" className="bid-button">
                        <h3>Login to Bid</h3>
                    </NavLink> : 
                    <NavLink to="/bidddd" className="bid-button">
                        <h3>Make a Bid</h3>
                    </NavLink>
                }
                
                <button onClick={handleViewAllClick} className="view-all-button">
                    <h3>View Bids</h3>
                </button>
                {props.admin && <button onClick={handleDelete} className="delete-button">
                    <img src="./delete.png" alt="Delete"/>
                </button>
                }
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h2>Bid History</h2>
                        {props.item.bidHistory.length > 0 ? (
                            <ul>
                                {props.item.bidHistory.map((bid, index) => (
                                    <li key={index}>
                                        {/* in below line, bid.username is fixed as bid.bidder. It shows the bidder name in poop-up box now. */}
                                        <strong>{bid.bidder}</strong>: ${bid.amount}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No bids yet.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;
