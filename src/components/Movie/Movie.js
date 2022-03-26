import React from 'react';
import './Movie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
    const{addToCartHandler} = props
    const {name, rating, img, genre} = props.movie
    return (
        <div className='card'>
            <img src={img} alt="" />
                <div className='movie-info'>
                    <p className='movie-title'>{name}</p>
                    <p>Genre: <small>{genre}</small></p>
                    <p><small>price: $ {rating}</small></p>
                </div>
                    <button onClick={ () => addToCartHandler (name) } className='add-cart-btn'>Add to Cart<span className='font-awesome'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Movie;