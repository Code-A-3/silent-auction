import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import Header from '../components/Header.jsx';
import Item from '../components/Item.jsx';
import AboutAuction from '../components/AboutAuction.jsx';
import Footer from '../components/Footer.jsx';

function Home(props) {
    const [items, setItems] = useState(null);
    const [total, setTotal] = useState(0);

    const fetchItems = async () => {
        await fetch('http://localhost:3000/items', {
            method: 'GET',
            credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => alert(error)
        );
    };

    const getTotal = async () => {
        if (items) {
            let summation = 0;
            items.forEach(item => {
                if (item.bidHistory[0]) {
                    summation += item.bidHistory[0].amount;
                }
            });
            setTotal(summation);
        }
    };
    
    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        getTotal();
    }, [items]);

    const handleSendBid = async (_id, bidAmount) => {
        await props.onBid(_id, bidAmount);
        fetchItems();
    };

    const handleDelete = async (itemId, itemTitle) => {
        const response = await fetch('http://localhost:3000/items/' + itemId, {
            method: "DELETE",
            credentials: 'include'
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
            <Header fetchItems={fetchItems} setItems={setItems} auth={props.auth} admin={props.admin} runCheck={props.runCheck} total={total} items={items}/>
            <main>
                <AboutAuction setTarget={props.setTarget} target={props.target} admin={props.admin} auth={props.auth} total={total}/>
                <div className='items-container'>
                    {items && items.map(item => (
                        <Item key={item._id} item={item} onDelete={handleDelete} onBid={handleSendBid} auth={props.auth} admin={props.admin}/>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
