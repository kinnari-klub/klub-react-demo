import { useReducer } from "react";
import cartContext from "./cart-context";
// import * as _ from 'lodash';

interface CartItem {
    items: [],
    totalAmount: 0,
    addItem?: () => {},
    removeItem?: () => {},
    id?: string
}

const defaultCartState: CartItem = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: any, action: any) => {
    const exisitingCartItemIndex = state.items.findIndex((item: any)=> {return item.id === action.item.id});
    const exisitingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems = [...state.items];
    if(action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        if(exisitingCartItem){
           const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + action.item.amount,
            };
            
            updatedItems[exisitingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);            
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } else if(action.type === 'REMOVE_ITEM') {
        console.log("removeitem", action);
        const updatedTotalAmount = state.totalAmount - exisitingCartItem.price;
        if(exisitingCartItem.amount === 1) {
            updatedItems = state.items.filter((item:any) => item.id !== action.item.id);
        } else {
            const updatedItem = {...exisitingCartItem, amount: exisitingCartItem.amount - 1};
            updatedItems[exisitingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props: any) => {
   const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item: CartItem) => {
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item});
    };
    const removeItemHandler = (item: CartItem) => {
        dispatchCartAction({type: 'REMOVE_ITEM', item: item});
    };
    const cartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }
    return <cartContext.Provider value={cartContextHelper}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;