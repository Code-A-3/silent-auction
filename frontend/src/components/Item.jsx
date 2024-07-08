import {NavLink} from 'react-router-dom';

function Item(props){

    return (
        <div className="item">
            <div className="item-image-container">
                <img className="item-image" src={props.item.image} alt={props.item.title} />
            </div>
            <div className="description">
                <h2>{props.item.title}</h2>
                <p><strong>Desription: </strong>{props.item.description}</p>
            </div>
            <div className="minimum">
                {props.item.bidHistory[0] ? <p><strong>Current Bid: </strong> {props.item.bidHistory[0].amount}</p> : <p><strong>Minimum Bid: </strong>{props.item.minBid}</p>}
            </div>
            <div className="bid">
                <NavLink to="/login"><h2>Login to Bid</h2></NavLink>
            </div>
        </div>
    )
}

export default Item;