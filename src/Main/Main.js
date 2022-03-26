import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Cart from '../components/Cart/Cart';
import Movie from '../components/Movie/Movie';
import './Main.css'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);
        useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

// add to cart handler

    const addToCartHandler=(selectedMovie)=>{
        
        const newCart = [...cart, selectedMovie]
        if(cart.length >=4){
            alert('Cant choose more than 4 movies')
        }
        else{

            setCart(newCart)
        }
        
    }

// clear cart handler

    const clearCart = () =>{
        setCart([])
    }

// random picker handler

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
                     cart.map( (item) => <Cart key={item.name} item={item}></Cart>)
                 }             
                <button className='clear-btn' onClick={clearCart}>Clear<span className='font-awesome'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span> </button>
                <button className='random-btn' onClick={selectRandom}>Pick a show</button>
                
            </div>
            <div>
                <p>how does react work?</p>
                <p>React is JS based library specially for UI. One of the best thing about react is it creates a virtual dom which compares with the real dom to makes changes to specific node which makes rendering fast rather than scanning the whole dom for making changes. React follows unidirection data flow. </p>
                <p>Props vs State</p>
                <table>
                    <tr>
                        <td>Props</td>
                        <td>State</td>
                    </tr>
                    <tr>
                        <td>props get passed to the component</td>
                        <td>state is managed within the component</td>
                    </tr>
                    <tr>
                        <td>props are immutable</td>
                        <td>state can be modified using the setState function</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Main;