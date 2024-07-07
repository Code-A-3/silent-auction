

import './styles.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Item from './components/Item';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState('');
  const [bidderId, setBidderId] = useState();
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/items')
      .then((response) => {
        if (response.data.message) {
          setMessage(response.data.message);
        }
        else {
          setItems(response.data.items);
        };
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [items]);

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
      axios.put(`/api/items/${itemId}/bids`, { bidder, amount })
        .then((response) => {
          if (response.data.message) {
            setMessage(response.data.message);
          }
          else {
            setItems(response.data.items);
          };
        })
        .catch(error => {
          console.error('There was an error updating the bid!', error);
        });
    }
    else{
      alert('Wrong value input')
    }
  }
  
  return (
    <>
      {items != '' ? (
        <>
          <Header total={total}/>
          <div className='item-container'>
            {items.map(item=>
              <Item key={item.id} item={item} addBid={addBid} bidderId={bidderId}/>
            )}
          </div>
        </>
      ) : (
        <>
          <Header message={message}/>
          <Login setItems={setItems} setBidderId={setBidderId}/>
        </>
      )}
    </>
  )
}

export default App;
