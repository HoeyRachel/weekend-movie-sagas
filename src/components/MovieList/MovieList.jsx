import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import '../Details/Details'
import { Link } from 'react-router-dom';





function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const moviedetails = useSelector(store => store.moviedetails);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <div className="movieListTitle">
            <h1>Movie List</h1>
            </div>
            <Link to = "/AddMovie">
            <button>
                Add New Movie
            </button>
            </Link>
            <section className="movies">
                {movies.map(movie => { 
                const addNewMovie = () => { 
    
                    dispatch( {
                        type: 'SET_ID', 
                        payload:{
                            id: movie.id, 
                            title: movie.title, 
                            poster: movie.poster, 
                            description: movie.description 
                            }
                        } )
                }
                    return (
                        <div className="movieListDiv">
                           
                            <div>              
                                        <p key={movie.id}>
                                            <h6>{movie.title}</h6>
                                            <div>
                                                <Link to="/details">
                                                    <img className="imgclass" src={movie.poster} alt={movie.title} onClick={addNewMovie}/>
                                                </Link>
                                            </div>
                                        </p>
                                   
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                        
                    );
                })}
            </section>
           

        </main>

    );
}

export default MovieList;