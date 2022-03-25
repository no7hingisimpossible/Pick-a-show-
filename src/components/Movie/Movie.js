import React from 'react';
import './Movie.css'

const Movie = (props) => {
    const{addToCartHandler} = props
    const {name, rating, img, genre} = props.movie
    return (
        <div className='card'>
            <img src={img} alt="" />
                <div className='movie-info'>
                    <p className='movie-title'>{name}</p>
                    <p>Genre: <small>{genre}</small></p>
                    <p><small>rating: {rating}</small></p>
                </div>
                    <button onClick={ () => addToCartHandler (name) } className='add-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Movie;