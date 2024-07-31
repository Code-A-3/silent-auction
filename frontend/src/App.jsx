
// GET REQUIREMENTS
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import About from './pages/About.jsx';
import AddItem from './pages/AddItem.jsx';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { useState, useEffect } from 'react';


// DEFINE APP COMPONENT
function App() {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);

  const checkToken = async () => {
    try {
      const response = await fetch('https://silent-auction-api.vercel.app/user/check-token', {
        method: 'GET',
        credentials: 'include' // This ensures cookies are sent with the request
      });
  
      if (!response.ok) {
        console.log(response.json())
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
  
      if (data.auth) {
        setAuth(true);
        setAdmin(data.admin);
      } else {
        setAuth(false);
        setAdmin(false);
      }
    } catch (error) {
      console.log(error)
      setAuth(false);
      setAdmin(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);


  const handleSendBid = async (_id, bidAmount) => {
    const token = Cookies.get('token');
    if (token) {
      try {
          const details = {amount: bidAmount};
          const response = await fetch('https://silent-auction-api.vercel.app/items/' + _id, {
              method: "PUT",
              body: JSON.stringify(details),
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include'
          })
          const responseJson = await response.json();
          console.log(responseJson);
          if (!response.ok) {
              return alert(responseJson.error);
          }
      } catch (error) {
          alert(error.message);
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/about" />} />
        <Route path='/items' element={<Home auth={auth} admin={admin} runCheck={checkToken} onBid={handleSendBid} />} />
        <Route path='/login' element={<Login auth={auth} admin={admin} runCheck={checkToken} />} />
        <Route path='/register' element={<Register auth={auth} admin={admin} runCheck={checkToken} />} />
        <Route path='/about' element={<About auth={auth} admin={admin} runCheck={checkToken} />} />
        <Route path='/add' element={<AddItem auth={auth} admin={admin} runCheck={checkToken} />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
