import classes from './Cart.module.css'
import Modal from '../UI/Modal';

function Cart(props) {
    const cartitems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'Shushi', amount: 2, price: 12.99}].map(
        item => <li>{item.name}</li>
    )}</ul>
    return(
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Oder</button>
            </div>
        </Modal>
    )
};

export default Cart;