import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    return (
        <div className='cart'>
            <p>Your Picks</p>
            <li>{cart}</li>
        </div>
    );
};

export default Cart;