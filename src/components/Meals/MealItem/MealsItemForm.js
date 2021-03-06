import Input from '../../UI/Input';
import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'

function MealsItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const inputAmount = amountInputRef.current.value;
        const inputAmountNumber = +inputAmount;

        if (inputAmount.trim().length === 0 ||
            inputAmountNumber < 1 ||
            inputAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(inputAmountNumber)
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1', max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount (1-5) !!</p>}
        </form>
    )
};

export default MealsItemForm;