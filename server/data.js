const data = {
    items: [
        {id:1, itemName:'Item 1', description:'Some item 1', url:'./glass.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}, {bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
        {id:2, itemName:'Item 2', description:'Some item 2', url:'./bottle.jpg', minPrice:100, bids:[]},
        {id:3, itemName:'Item 3', description:'Some item 3', url:'./sofa.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
        {id:4, itemName:'Item 4', description:'Some item 4', url:'./tv.jpg', minPrice:100, bids:[{bidder:'Bidder 3', amount: 103}, {bidder:'Bidder 2', amount: 102}, {bidder:'Bidder 1', amount: 101}]},
    ],
    users: [
        {id: 1, userName: 'User-1', password: '1'},
        {id: 2, userName: 'User-2', password: '2'},
        {id: 3, userName: 'User-3', password: '3'}
    ]
}

export default data;