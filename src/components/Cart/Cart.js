import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props
    return (
        <div className='cart'>
            <p>{cart}</p>
           
            
            
        </div>
    );
};

export default Cart;