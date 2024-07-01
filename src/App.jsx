import { useState, useEffect } from 'react'
import './styles.css'
import Header from './components/Header'
import Item from './components/Item'


const itemsBase = [
  {id:1, itemName:'Item 1', description:'Some item 1', url:'./glass.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}, {bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
  {id:2, itemName:'Item 2', description:'Some item 2', url:'./bottle.jpg', minPrice:100, bids:[]},
  {id:3, itemName:'Item 3', description:'Some item 3', url:'./sofa.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
  {id:4, itemName:'Item 4', description:'Some item 4', url:'./tv.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
]

function App() {
  const [items, setItems] = useState(itemsBase)
  const [total, setTotal] = useState('')

  useEffect(() => {
    let tempTotal = 0;
    items.forEach(item => {
      if (item.bids[0]){
        tempTotal = tempTotal + item.bids[0].amount;
      }
    });
    setTotal(tempTotal);
  },[items])

  const addBid = (itemId, bidder, amount) => {
    if (!bidder){
      alert('Please write your name to bid')
    }
    else if (items[itemId - 1].bids.length > 0 && amount <= items[itemId - 1].bids[0].amount){
      alert('You have to bid more than the latest bidding amount.')
    }
    else if (amount < items[itemId - 1].minPrice) {
      alert('You cannot bid less than minimum amount.')
    }
    else if (amount > 0) {
      setItems(prevItems => {
        return prevItems.map(item => {
          if (item.id === itemId) {
            return { ...item, bids: [{bidder, amount}, ...item.bids]};
          }
          return item;
        })
      })
    }
    else{
      alert('Wrong value input')
    }
  }

  return (
    <>
      <Header total={total}/>
      <div className='item-container'>
        {items.map(item=>
          <Item key={item.id} item={item} addBid={addBid} />
        )}
      </div>
    </>
  )
}

export default App
