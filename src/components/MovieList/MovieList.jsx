import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Details from '../Details/Details';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import req from 'express/lib/request';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        console.log ('-------In Use Effect Movie List')
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

   

    return (
        <main>
            <h1>MovieList</h1>
            <Link to = "/AddMovie">
            <Button>
                Add New Movie
            </Button>
            </Link>
            <section className="movies">
                {/* Mapping through the reducer  */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to = "/Details"  >
                            <img src={movie.poster} alt={movie.title} />
                            </Link>
                        </div>
                    );
                })}
            </section>
           
        </main>

    );
}

export default MovieList;