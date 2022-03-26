import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {item} = props
    return (
        <div className='cart'>
            <p>{item}</p>
           
            
            
        </div>
    );
};

export default Cart;