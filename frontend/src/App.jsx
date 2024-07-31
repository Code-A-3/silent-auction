
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

  const checkToken = ()=>{
    const token = Cookies.get('token');
    if (token) {
      setAuth(true);
      try {
        const decoded = jwtDecode(token);
        setAdmin(decoded.admin);
      } catch (error) {
        alert('Something went wrong with the session data!');
      }
    }
    else {
      setAuth(false);
      setAdmin(false);
    }
  };

  const handleSendBid = async (_id, bidAmount) => {
    const token = Cookies.get('token');
    console.log(token);
    if (token) {
      try {
          const decoded = jwtDecode(token);
          const activeUser = decoded.userName;
          const details = {user: activeUser, amount: bidAmount};
          const response = await fetch('https://silent-auction-api.vercel.app/items/' + _id, {
              method: "PUT",
              body: JSON.stringify(details),
              headers: {
                  'Content-Type': 'application/json'
              },
              credentials: 'include'
          })
          const responseJson = await response.json();
          if (!response.ok) {
              return alert(responseJson.error);
          }
      } catch (error) {
          alert(error.message);
      }
    }
  }

  useEffect(()=>{
    checkToken();
  }, []);

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
