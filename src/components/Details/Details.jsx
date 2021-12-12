import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css'
import { Link } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    ///need to access all three stores to get data for each
    const genres = useSelector(store => store.genres);
    const movies = useSelector (store => store.movies);
    const movieDetails = useSelector (store => store.movieDetails);


///pass useEffect the dispatch with the action type and the payload
    useEffect(() => {
       dispatch({
           type: 'FETCH_GENRES',
           payload: movieDetails.id
       })
        }
    , []);

   

    return (
        <main>
            <h1>Movie Details</h1>
            <h2>key={movieDetails.id}</h2>
            <h2>{movieDetails.title}</h2>
            <img src={movieDetails.poster}/>
            <p>{movieDetails.description}</p>
            <h4>Genres:</h4>
                {genres.map(genre => {
                    return (
                    <h5>{genre.name}</h5>
                                        
                    );
                })}
           

            <Link to = "/">
            <button>
                Back to Movie List
            </button>
            </Link>
           
            
        </main>

    );
}

export default Details;