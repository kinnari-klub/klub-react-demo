import { useContext } from 'react';
import cartContext from '../../../store/cart-context';
import classes from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
interface Props {
    data: {
        price: number,
        name: string,
        description: string,
        id: string | number,
        amount?: number
    }
}

const MealItem = (props: Props) => {
    const price = `Rs.${props.data.price?.toFixed(2)}`;

    const cartCtx = useContext(cartContext);
    const addToCartHandler = (amount: any) => {
        // console.log("data", props.data);
        props.data.amount = amount;
        cartCtx.addItem(props.data);
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.data.name}</h3>
            <div className={classes.description}>{props.data.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm id={props.data.id} onAddToCart={addToCartHandler} />
            {/* add to cart button */}
        </div>
    </li>
}

export default MealItem;