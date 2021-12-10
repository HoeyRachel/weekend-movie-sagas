import { TextField, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddMovie.css'

function AddMovie() {
    //use existing reducer to add movies to the store
    const movies = useSelector (store => store.movies);
    console.log ('in Movie Reducer Add Movie Page', movies);
    const dispatch = useDispatch();
    const [addMovie, setNewMovie] = useState('');

    const addNewMovie = (event)=>{
        setNewMovie(event.target.value);
        console.log ('added New Movie:', addMovie);
        
      }
   

    return (
        <main>
            <h1>Add a New Movie</h1>
           <TextField
           label="Add Movie Title" 
           defaultValue=""
           onChange ={(event)=>addNewMovie(event)}
           >
           </TextField>

           <Button
          
           >
           
           <Link to="/">
           Save New Movie
           </Link>
           </Button>
            
        </main>

    );
}

export default AddMovie;