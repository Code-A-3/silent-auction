import { NavLink } from 'react-router-dom';
import '../styles.css'; 

function Header(props) {
    return (
        <header className="header-container">
            <NavLink to="/">
                <img className="site-logo" src="/favicon-trans.png" alt="Site Logo" />
            </NavLink>
            <h1 className="site-title">Silent Auction</h1>
            {props.total ? (
                <div className="totalSales">
                    <h2>Total Bids: {props.total}</h2>
                </div>
            ) : (
                <nav className="header-links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/">Items</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            )}
        </header>
    );
}

export default Header;
