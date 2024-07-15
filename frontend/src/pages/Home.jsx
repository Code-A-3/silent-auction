import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Item from '../components/Item.jsx';
import AboutAuction from '../components/AboutAuction.jsx';
import Footer from '../components/Footer.jsx';

function Home(props) {
    const [items, setItems] = useState(null);

    const fetchItems = async () => {
        await fetch('http://localhost:3000/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => alert(error));
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleDelete = async (itemId, itemTitle) => {
        const response = await fetch('http://localhost:3000/items/' + itemId, {
            method: "DELETE",
        })
        const responseJson = await response.json();
        if (!response.ok) {
            return alert(responseJson.error);
        }
        alert(`"${itemTitle}" is deleted from auction`);
        fetchItems();
    }

    return (
        <>
            <Header total={props.total} />
            <main> {/* Add this wrapper */}
                <AboutAuction />
                <div className='items-container'>
                    {items && items.map(item => (
                        <Item key={item._id} item={item} onDelete={handleDelete} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
