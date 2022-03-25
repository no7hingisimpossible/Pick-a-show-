import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Movie from '../components/Movie/Movie';
import './Main.css'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
        useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    const addToCartHandler=(name)=>{
        const newCart = [...cart, name]
        setCart(newCart)
        console.log(newCart);
    }

    return (
        <div className='main-container'>
            <div className='movie-container'>
                {
                    movies.map(movie=> <Movie
                        key={movie.id}
                        movie={movie}
                        addToCartHandler ={addToCartHandler}
                         
                         ></Movie>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;