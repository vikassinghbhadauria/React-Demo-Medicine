import MedicineItemForm from './MedcineItemForm';

import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MedcineItem.module.css';

const MedicineItem =(props) =>{
    const cartCtx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (quantity) =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            quantity: quantity,
            price: props.price
        });
    };

    return(
        <li className={classes.medicine}>
            <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
            <MedicineItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MedicineItem; 