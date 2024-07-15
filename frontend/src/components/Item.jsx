import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Item(props) {
    const [showModal, setShowModal] = useState(false);

    const handleViewAllClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                <NavLink to="/login" className="bid-button">
                    <h3>Login to Bid</h3>
                </NavLink>
                <button onClick={handleViewAllClick} className="view-all-button">
                    <h3>View Bids</h3>
                </button>
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
                                        <strong>{bid.username}</strong>: ${bid.amount}
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
