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
    // local state set to empty string
    const [addMovie, setNewMovie] = useState('');
    const [addDescription, setNewDescription] = useState('');

//target the text input being entered
    const addNewMovie = ()=>{
        console.log (' in addNewMovie!!!!');
        dispatch({ type: 'ADD_MOVIES', payload: 'YIPPEE' });
        
      }

    const addNewDescription = (event)=>{
        setNewDescription(event.target.value);
        console.log ('added Movie Description', addDescription);
        
      }
   

    return (
        <main>
            <h1>Add a Movie</h1>
           <TextField
           label="Add Movie Title" 
           defaultValue=""
           onChange ={(event)=>addNewMovie(event)}
           >
           </TextField>
           <label>
               Enter Movie Description
            </label>
           <textarea
           value=""
           onChange ={(event)=>addNewDescription(event)}
           >

           </textarea>
           
           
           
            {/* send new movie to the store with dispatch  */}
           <Button
          onClick = {addNewMovie}
           >
           
           {/* <Link to="/"> */}
           Save New Movie
           {/* </Link> */}
           </Button>
            
        </main>

    );
}

export default AddMovie;