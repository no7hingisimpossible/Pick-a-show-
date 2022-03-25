import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
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
        if(cart.length >=5){
            alert('Cant choose more than 5 movies')
        }
        else{

            setCart(newCart)
        }
        console.log(newCart);
    }
    const clearCart = () =>{
        setCart([])
    }
    const selectRandom= () => {
        let show = cart[Math.floor(Math.random() * cart.length)];
        alert(show)
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
                <p className='picks'>Your Picks</p>
                {
                    cart.map(item=> <Cart item={item}></Cart>)
                }
                {/* <Cart
                clearCart={clearCart} 
                cart={cart}
                ></Cart> */}
                <button className='clear-btn' onClick={clearCart}>Clear</button>
                <button className='random-btn' onClick={selectRandom}>Pick a random show</button>
                
            </div>
        </div>
    );
};

export default Main;