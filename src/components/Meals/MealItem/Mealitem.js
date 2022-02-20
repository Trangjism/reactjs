import classes from './MealItem.module.css'
import { useContext } from 'react';
import MealsItemForm from './MealsItemForm';
import CartContext from '../../../Store/cart-context';


function Mealitem(props) {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCardHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div>{price}</div>
                
            </div>
            <div><MealsItemForm onAddToCart={addToCardHandler} id={props.id}/></div>
        </li>
    )
};

export default Mealitem;