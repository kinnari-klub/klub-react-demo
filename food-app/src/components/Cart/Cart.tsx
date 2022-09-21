import classes from "./Cart.module.scss";
import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props: any) => {
  const cartCtx = useContext(cartContext);
  const [isCheckout, setCheckout] = useState(false);
  const hasItems = cartCtx.items.length > 0;
  console.log("cartCtx.totalAmount", cartCtx.totalAmount);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (item: any) => {
    cartCtx.removeItem(item);
  }
  const cartAddHandler = (item: any) => {
    console.log("card add", item);
    cartCtx.addItem({...item, amount: 1});
  }

  const orderHandler = () => {
    setCheckout(true);
  }

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item: any) => (
        <CartItem data={item} key={item.id} onRemove={cartItemRemoveHandler.bind(null, item)} 
        onAdd={cartAddHandler.bind(null, item)}></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      {isCheckout && <Checkout />}
      {!isCheckout && 
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes["button"]} onClick={orderHandler}>Order</button>}
        </div>      
      }
    </Modal>
  );
};

export default Cart;
