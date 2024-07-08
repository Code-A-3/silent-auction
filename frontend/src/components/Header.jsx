import {NavLink} from 'react-router-dom';

function Header(props){

    if (props.total){
        return (
            <div className="header-container">
                <NavLink to="/">
                    <img className="site-logo" src="/favicon-trans.png" alt="Site Logo" />
                </NavLink>
                <h1>Silent Auction</h1>
                <div className="totalSales">
                    <h2>Total Bids: {props.total}</h2>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="header-container">
                <NavLink to="/">
                    <img className="site-logo" src="/favicon-trans.png" alt="Site Logo" />
                </NavLink>
                <h1>Silent Auction</h1>
                <div className="totalSales">
                    <NavLink to="/login"><h2>SignUp / LogIn</h2></NavLink>
                </div>
            </div>
        )
    }
}

export default Header;