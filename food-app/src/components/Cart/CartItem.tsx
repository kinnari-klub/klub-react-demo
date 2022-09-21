import classes from './CartItem.module.scss';
interface Props {
    data: {
        price: number,
        name: string,
        amount: string | number,
    }
    onRemove: (event: any) => void,
    onAdd: (event: any) => void,
}

const CartItem = (props: Props) => {
    const price = `$${props.data.price.toFixed(2)}`;
    return <li className={classes['cart-item']}>
    <div>
      <h3 className={classes.title}>{props.data.name}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>x {props.data.amount}</span>
      </div>
    </div>
    <div className={classes.actions}>
      <button onClick={props.onRemove}>−</button>
      <button onClick={props.onAdd}>+</button>
    </div>
  </li>
}

export default CartItem;