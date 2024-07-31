import { NavLink, useNavigate } from 'react-router-dom';
import '../styles.css'; 

function Header(props) {

    const navigate = useNavigate();

    const handleLogout = async ()=>{
        try {
            const response = await fetch('http://localhost:3000/user/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (response.ok) {
                props.runCheck();
                navigate('/');
            }
        } catch (error) {
            
        }
    };

    return (
        <header className="header-container">
            <NavLink to="/">
                <img className="site-logo" src="/favicon-trans.png" alt="Site Logo" />
            </NavLink>
            <h1 className="site-title">Silent Auction</h1>
            <nav className="header-links">
                {/* {props.total && 
                    <div className="totalSales">
                    <h2>Total Bids: {props.total}</h2>
                </div>} */}
                <NavLink to="/about">About</NavLink>
                <NavLink to="/items">Auction</NavLink>
                {props.admin && <NavLink to="/add">Add Item</NavLink>}
                
                {!props.auth ? <NavLink to="/login">Login</NavLink> : <button className='logout-button' onClick={handleLogout}>Logout</button>}
            </nav>
        </header>
    );
}

export default Header;
