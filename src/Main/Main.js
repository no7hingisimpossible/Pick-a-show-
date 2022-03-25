import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';
import './Main.css'

const Main = () => {
    const [movies, setMovies] = useState([]);
        useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div className='main-container'>
            <div className='movie-container'>
                {
                    movies.map(movie=> <Movie
                        key={movie.id}
                        movie={movie}
                         
                         ></Movie>)
                }
            </div>
            <div className='cart-container'>
                <p>Cart will go here</p>
            </div>
        </div>
    );
};

export default Main;