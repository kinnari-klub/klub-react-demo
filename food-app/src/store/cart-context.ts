import React from 'react';
// interface cartItem {
//     items: [],
//     totalAmount: number,
//     addItem: () => {},
//     removeItem: () => {},
//     id?: string
// }

const cartContext = React.createContext({
    items: <any>[],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (item: any) => {},
});

export default cartContext;