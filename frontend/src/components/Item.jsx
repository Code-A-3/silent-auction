import Bidder from './Bidder'
import History from './History'

function Item(props){

    return (
        <div className="item">
            <div className="item-image-container">
                <img className="item-image" src={props.item.url} alt={props.item.itemName} />
            </div>
            <div className="text-area">
                <h2>{props.item.itemName}</h2>
                <p><strong>Desription: </strong>{props.item.description}</p>
                <p><strong>Minimum Bid: </strong>{props.item.minPrice}</p>
            </div>
            <Bidder addBid={props.addBid} itemId={props.item.id} bidderId={props.bidderId}/>
            <History bids={props.item.bids} />
        </div>
    )
}

export default Item;