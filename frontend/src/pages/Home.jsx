import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Item from '../components/Item.jsx';

function Home(props){
    const [items, setItems] = useState(null);

    useEffect(()=>{
        const fetchItems = async ()=>{
            await fetch('http://localhost:3000/items')
                .then(response => response.json())
                .then(data => setItems(data))
                .catch(error=>console.log('Error fetching data: ', error));
        };
        fetchItems();
    }, []);

    return (
        <>
            <Header total={props.total}/>
            <div className='item-container'>
                {items && items.map(item=>(
                    <Item key={item._id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Home;