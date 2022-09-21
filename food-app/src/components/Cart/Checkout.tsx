import classes from './Checkout.module.scss';

const Checkout = () => {
    return <form action="">
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name'/>
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id='street'/>
        </div>
        <div className={classes.control}>
            <label htmlFor="code">Postal Code</label>
            <input type="text" id='code'/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input type="text" id='city'/>
        </div>
    </form>
}

export default Checkout;