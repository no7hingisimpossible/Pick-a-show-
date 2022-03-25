import React from 'react';
import Button from '../Button/Button';

import './Cart.css'

const Cart = (props) => {

    const {item} = props
    return (
        <div className='cart'>
            <p>{item}</p>
            {/* <button onClick={props.clearCart}>Clear</button> */}
            
            
        </div>
    );
};

export default Cart;