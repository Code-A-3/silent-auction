
function History(props){
    let key = 0;
    return (
        <div className="history">
            <h2>Lates Bids:</h2>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.bids.slice(0, 5).map((bid, index) => (
                        <tr key={index}>
                            <td>{bid.bidder}</td>
                            <td>{bid.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default History;