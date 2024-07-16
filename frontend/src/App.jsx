
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
    console.log('check');
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

  useEffect(()=>{
    checkToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home auth={auth} admin={admin} runCheck={checkToken} />} />
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
