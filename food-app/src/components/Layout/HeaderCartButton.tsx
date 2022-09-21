import { useCallback, useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: any) => {
    
    const ctx = useContext(cartContext);
    const { items } = ctx;
    const totalCartItems = items.reduce((currentNumber: any = 0, item: any)=> {
        return currentNumber + item.amount;
    }, 0);
    const [buttonHighlight, setHighlight] = useState(false);
    const btnClasses = `${classes.button} ${buttonHighlight ? classes.bump : ''} `;
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setHighlight(true);
        const timer = setTimeout(() => {
            setHighlight(false);
        }, 350);
        return () => {
            clearTimeout(timer);
        }
    }, [ctx]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span >Your Cart</span>
        <span className={classes.badge}>{totalCartItems}</span>
    </button>
}

export default HeaderCartButton