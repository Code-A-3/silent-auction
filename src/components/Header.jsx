function Header(props){

    return (
        <div className="header-container">
            <img className="site-logo" src="/favicon-trans.png" alt="Site Logo" />
            <h1>Silent Auction</h1>
            <div className="totalSales">
                <h2>Total Bids: {props.total}</h2>
            </div>
        </div>
    )
}

export default Header;