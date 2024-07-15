import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Item from '../components/Item.jsx';
import AboutAuction from '../components/AboutAuction.jsx';
import Footer from '../components/Footer.jsx';

function Home(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            await fetch('http://localhost:3000/items')
                .then(response => response.json())
                .then(data => setItems(data))
                .catch(error => console.log('Error fetching data: ', error));
        };
        fetchItems();
    }, []);

    return (
        <>
            <Header total={props.total} />
            <main> {/* Add this wrapper */}
                <AboutAuction />
                <div className='items-container'>
                    {items && items.map(item => (
                        <Item key={item._id} item={item} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
