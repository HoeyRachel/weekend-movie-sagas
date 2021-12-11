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
    // local state set to empty object 
    const [addMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '', 
        genre_id: 0
    });
    
    ///this function is sending the dispatch to the root generator function
    const postMovie = () => {
        console.log (' in POST movie');
        dispatch ({
            type: 'POST_MOVIE',
            payload: addMovie
        });
    }

//need event handlers to handle each of the inputs being entered. 
    const handleMovieTitle  = (event)=>{
        console.log (' in handleMovieTitle:', event.target.value );
        setNewMovie({...addMovie, title: event.target.value});
        
      }

    
   

    return (
        <main>
            <h1>Add a Movie</h1>
           <TextField
           label="Add Movie Title" 
           defaultValue=""
           onChange ={(event)=>handleMovieTitle(event)}
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
           >
           
           {/* <Link to="/"> */}
           Save New Movie
           {/* </Link> */}
           </Button>
            
        </main>

    );
}

export default AddMovie;