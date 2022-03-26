import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, img} = (props.item);
    return (
        <div className='cart'>
            <div className='img-container'>
                <img className='img' src={img} alt="" />
            </div>
            <p className='movie-name'>{name}</p>
           
            
            
        </div>
    );
};

export default Cart;